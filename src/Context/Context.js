import React, { createContext, useReducer, useEffect } from 'react';
import { commerce } from '../lib/commerce';
import { Redirect } from 'react-router-dom';

export const GlobalContext =  createContext();
const initialState = {
    products: [],
    cart: [],
    checkoutToken: null,
    order: {},
    error: ''
};

const reducer = (myState, action) => {
    switch (action.type) {
        case 'product':
            return {
                ...myState,
                products: action.value
            };
        case 'cart':
            return {
                ...myState,
                cart: action.value
            };
        case 'token':
            return {
                ...myState,
                checkoutToken: action.value
            };
        case 'order':
            return {
                ...myState,
                order: action.value
            };
        case 'error':
            return {
                ...myState,
                error: action.value
            };
        
        default:
            return myState;
    }
}

function Context({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    //async function provided by commerce.js to fetch the products from the backend
    const fetchProducts = async() => {
        const {data} = await commerce.products.list({
            limit: 100,
        });
        dispatch({type: 'product', value: data});
    };
    
    //use useEffect hook to call the fetchProducts at the render
    useEffect( () => {
        fetchProducts();
    }, [])

    //Retrieve cart items/products from the server through useEffect hook
    useEffect(() => {
        commerce.cart.retrieve()
            .then( (cart) => dispatch({type: 'cart', value: cart}) );
    },[])

    //Generate a checkout token and assign the value to checkoutToken, the value changes whenever the state of the cart changes
    useEffect( () => {
        const generateToken = async () => {
            try {
                await commerce.checkout.generateToken(state.cart.id, {type: 'cart'})
                        .then((checkout) => dispatch({ type: 'token', value: checkout }));
            } catch (error) {
                //revisit this part of routing 
                <Redirect to="/cart" />
            }
        }
        generateToken()
    },[state.cart])

    //Update the cart after a client clears the products in the cart
    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        dispatch({ type: 'cart', value: newCart });
    };

    /*Take care of the checkout process using the handleCaptureCheckout function by passing the checkoutTokenID and
    newOrder parameters.*/ 
    const handleCaptureCheckout = async (checkoutTokenID, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenID, newOrder);
            dispatch({ type: 'order', value: incomingOrder });
            refreshCart();
        } catch (error) {
            dispatch({ type: 'error', value: error.data.error.message });
        }
    }

    console.log(state.products); 

    const value = {
        Products: state.products,
        Cart: state.cart,
        dispatch,
        Commerce: commerce,
        handleCaptureCheckout
    }

    return (
        <GlobalContext.Provider value={
            value
        }>
            { children }
        </GlobalContext.Provider>
    )
}

export default Context;

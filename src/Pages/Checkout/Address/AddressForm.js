import React, {useEffect, useContext, useReducer} from 'react';
import { GlobalContext } from '../../../Context/Context';
import AForm from './Form';

const initialState = {
    shipCountries: [],
    shipCountry: '',
    shipSubdivisions: [],
    shipSubdivision: '',
    shipOptions: [],
    shipOption: '',
};

const Reducer = (state, action) => {
    switch(action.type) {
        case 'countries':
            return {
                ...state,
                shipCountries: action.value
            };
        case 'country':
            return {
                ...state,
                shipCountry: action.value
            };
        case 'subdivisions':
            return {
                ...state,
                shipSubdivisions: action.value
            };
        case 'subdivision':
            return {
                ...state,
                shipSubdivision: action.value
            };
        case 'options':
            return {
                ...state,
                shipOptions: action.value
            };
        case 'option':
            return {
                ...state,
                shipOption: action.value
            };
        default: 
            return state;
    }
}

function AddressForm({next}) {

    const {Commerce, CheckoutToken} = useContext(GlobalContext);
    /*define useReducer to hold state for shippingCountries, Country, Subdivisions, subdivision
    and options */
    const [ state, dispatch ] = useReducer(Reducer, initialState);

    /*loop through the different countries that products can be shipped to, and then destructure the
    code and the name of the various countries*/
    const countries = Object.entries(state.shipCountries).map(([code, name])=>({ id:code, name:name }));
    /*loop through the different subdivisions of a country that products can be shipped to, and then 
    destructure the code and the name of the subdivisions*/
    const subdivisions = Object.entries(state.shipSubdivisions).map(([code, name])=>({ id:code, name:name }));
    /*loop through the different shipping options*/
    const options = state.shipOptions.map(({id, description, price})=>({
        id: id,
        name:`${description} - ${price.formatted_with_symbol}`,
    }));

    /*fetch the shipping countries */    
    useEffect(()=>{
        const fetchShippingCountries = async (checkoutTokenID) => {
            const { countries } = await Commerce.services.localeListShippingCountries(checkoutTokenID);
            dispatch({type: 'countries', value: countries});
            dispatch({type: 'country', value: Object.keys(countries)[0]});           
        }

        (CheckoutToken) && fetchShippingCountries(CheckoutToken.id);
    },[CheckoutToken, Commerce])
    

    /*fetch subdivisions from the backend*/
    useEffect(()=>{
        const fetchShippingSubdivisions = async (countryCode) => {
            const { subdivisions } = await Commerce.services.localeListSubdivisions(countryCode);
            dispatch({type: 'subdivisions', value:subdivisions});
            dispatch({type: 'subdivision', value:Object.keys(subdivisions)[0]});
        }

        (state.shipCountry) && fetchShippingSubdivisions(state.shipCountry);
    },[state.shipCountry, Commerce])

    /*fetch shipping options depending on what country and subdivision the client chooses;*/
    useEffect(()=>{
        const fetchShippingOptions = async (checkoutTokenID, country, region=null) => {
            const response = await Commerce.checkout.getShippingOptions(checkoutTokenID, {country, region});
            dispatch({type: 'options',value: response});
            dispatch({type: 'option', value: response[0].id});
        }

        (state.shipSubdivision) && fetchShippingOptions(CheckoutToken.id, state.shipCountry, state.shipSubdivision);
    }, [Commerce, CheckoutToken, state.shipCountry, state.shipSubdivision])

    return (
        <>
            <AForm 
                countries={ countries }
                subdivisions={ subdivisions }
                options={ options }
                shipCountry={ state.shipCountry }
                shipSubdivision={ state.shipSubdivision }
                shipOption={ state.shipOption }
                dispatch={ dispatch }
                next={ next }
            />
        </>
    )
}

export default AddressForm;

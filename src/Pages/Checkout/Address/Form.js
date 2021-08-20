import React from 'react';
import styled from 'styled-components';
import { device } from '../../../Components/index';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function AForm({
    countries, subdivisions, options,
    shipCountry, shipSubdivision,
    shipOption, dispatch, next
    }) {

    const {register, handleSubmit, errors} = useForm();

    return (
        <FormWrapper>
            <Heading>
                <H2>Shipping Details</H2>
                <P>Tell us about your shipping details!</P>
            </Heading>
            <Form onSubmit={handleSubmit(data => next(data))}>
                <Input name='name' type='text' placeholder='Name:' ref={register({required: true})}/>
                    {errors.name && (<P1> This field is required! </P1>)}
                <Input name='surname' type='text' placeholder='Surname:' ref={register({required: true})}/>
                    {errors.surname && (<P1> This field is required! </P1>)}
                <Input name='email' type='text' placeholder='E-mail:' ref={register({required: true})}/>
                    {errors.email && (<P1> This field is required! </P1>)}
                <Input name='address' type='text' placeholder='Address:' ref={register({required: true})}/>
                    {errors.address && (<P1> This field is required! </P1>)}
                <Input name='city' type='text' placeholder='City:' ref={register({required: true})}/>
                    {errors.city && (<P1> This field is required! </P1>)}
                <Input name='zip' type='text' placeholder='Zip/Postal Code:' ref={register({required: true})}/>
                    {errors.zip && (<P1> This field is required! </P1>)}
                <Select
                    name='shipCountry'
                    value={shipCountry}
                    onChange={(e)=>dispatch({type: 'country', value: e.target.value})}
                    ref={register({required: true})}
                >
                    {
                        countries.map((country)=>(
                            <option 
                                key={country.id}
                                value={country.id}
                            >
                                {country.name}
                            </option>
                        ))
                    }
                </Select>
                    {errors.shipCountry && (<P1> This field is required! </P1>)}
                <Select
                    name='shipSubdivision'
                    value={shipSubdivision}
                    onChange={(e)=>dispatch({type: 'subdivision', value: e.target.value})}
                    ref={register({required: true})}
                >
                    {
                        subdivisions.map((subdivision)=>(
                            <option
                                key={subdivision.id}
                                value={subdivision.id}
                            >
                                {subdivision.name}
                            </option>
                        ))
                    }
                </Select>
                    {errors.shipSubdivision && (<P1> This field is required! </P1>)}
                <Select
                    name='shipOption'
                    value={shipOption}
                    onChange={(e)=>dispatch({type: 'option', value: e.target.value})}
                    ref={register({required: true})}
                >
                    {
                        options.map((option)=>(
                            <option
                                key={option.id}
                                value={option.id}
                            >
                                {option.name}
                            </option>
                        ))
                    }
                </Select>
                    {errors.shipOption && (<P1> This field is required! </P1>)}
                <ButtonWrapper>
                    <StyledLink to='/cart'>
                        <Button>
                            Back to Cart
                        </Button>
                    </StyledLink>
                    <Button type='submit'>
                        Next 
                    </Button>
                </ButtonWrapper>
            </Form>
        </FormWrapper>
    );
}

export default AForm;

/*styling using styled components*/
const FormWrapper = styled.div`
    width: 20rem;
    height: auto;
    display: flex;
    flex-direction: column;
    border: .1rem solid #0C0032;
    border-radius: .2rem;
    margin-top: .5rem;
    padding: 0rem .1rem;
    margin-bottom: 5rem;

    @media ${ device.tablet } {
        width: 30rem;
        margin-top: .5rem;
    } 
`;

const Heading = styled.div`
    display: block;
    width: 100%;
    color: #C5C6C7;
    justify-content: center;
    align-content: center;
    height: 4rem;
    background-color: #0C0032;
    border: hidden;
    border-radius: .3rem;
    margin-top: .1rem;
`;

const H2 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: 1.2rem;
    text-align: center;
    margin-top: .3rem;
`;

const P = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: 0.8rem;
    text-align: center;
`;

const P1 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: .8rem;
    text-align: start;
    color: #ff0000;
`;

const Form = styled.form`
    display: block;
    width: 100%;
`;

const Input = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    display: block;
    width: 100%;
    margin-top: .3rem;
    padding: 0.5em;
    color: #C5C6C7;
    background-color: #0C0032;
    border: none;
    border-radius: .2rem;
`;

const Select = styled.select`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    display: block;
    width: 100%;
    margin-top: .3rem;
    padding: .5em;
    background-color: #0C0032;
    color: #C5C6C7;
    font-size: 1rem;
    border: none;
    border-radius: .2rem;

        option {
            color: #C5C6C7;
            background: #0C0032;
            display: flex;
  }
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;
    margin: 1rem 0rem;

    @media ${device.tablet}{
        justify-content: space-around;
    }
`;

const Button = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    color: #0C0032;
    padding: .3rem 2rem;
    border: .1rem solid #C5C6C7;
    border-radius: .2rem;
    background-color: transparent;
    transition: 2s;

    &:hover {
        background-color: #0C0032;
        color: #C5C6C7;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }
`;

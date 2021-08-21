import React, { useState } from 'react';
import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiShoppingCart } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { device } from './index';
import { CategoryData } from './CategoryData';

const Header = () => {
    /*declare active to hold state that determines whether or not to shows
    book Categories when the burger is clicked*/ 
    const [ active, setActive ] = useState(false);
    
    return (
        <>
        <Navbar>
            <Wrapper>
                <Title>CS Books</Title>
                <Hamburger
                    onClick= {()=> setActive(!active)}
                > <GiHamburgerMenu /> </Hamburger>
                <ShoppingCart> 
                    <StyledLink to='/cart'>
                        <HiShoppingCart />
                    </StyledLink>
                </ShoppingCart>
                <NavbarContent>
                    <StyledUl>
                        <StyledLi>
                            <StyledLink to='/registration'>
                                <BsFillPersonFill /> Registration
                            </StyledLink>   
                        </StyledLi>
                        <StyledLi>
                            <BsFillPersonFill /> Login
                        </StyledLi>
                        <StyledLi>
                            <StyledLink to='/cart'>
                                <HiShoppingCart/> Cart
                            </StyledLink>
                        </StyledLi>
                    </StyledUl>
                </NavbarContent>
            </Wrapper>  
        </Navbar>
        {
            active ?
                <CategoryWrapper>
                    <StyledUlist>
                        {
                            CategoryData.map((data, index)=> (
                                <StyledList key={index}>
                                    <StyledLink to={data.link}>
                                        {data.title}
                                    </StyledLink>
                                </StyledList>
                            ))
                        }
                    </StyledUlist>
                </CategoryWrapper>
                : 
                <>
                </> 
        }
        </>
    );
}

export default Header;

/*Styling for the header using styled components */
const Navbar = styled.div`
    display: block;
    width: 100%;
    position: fixed;
    top:0;
    height: 4rem;
    background-color: #0C0032;
    color: #C5C6C7;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;  
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.tablet} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
        margin: 0vh 10vw;
        padding: 2vh 0vw;
    }
`;

const Title = styled.div`
    font-size: 1rem;
    margin-top: 1.25rem;

    @media ${device.tablet} {
        font-size: 1.3rem;
        padding: 0rem 1rem;
        margin-top: 0rem;
    } 
    
    @media ${device.laptop} {
        font-size: 1.6rem;
    }

    @media ${device.laptopL} {
        font-size: 2rem;
    }

    @media ${device.desktop} {
        font-size: 3rem;
    }
`;

const NavbarContent = styled.div`
    font-size: 1rem;

    @media ${device.tablet} {
        font-size: 0.90rem;
    } 
    
    @media ${device.laptop} {
        font-size: 1rem;
    }

    @media ${device.laptopL} {
        font-size: 1.3rem;
    }

    @media ${device.desktop} {
        font-size: 2rem;
    }
`;
 
export const StyledUl = styled.div`
    padding: 0rem;
    margin: 0rem;
    display: none;

    @media ${device.tablet} {
        padding: 0px;
        display: inline-flex;
        flex-direction: row;
        justify-content: space-around;
    }
`;

export const StyledLi = styled.div`
    list-style-type: none;
    display: flex;
    align-items: center;
    padding: 0rem 2rem;

    @media ${device.tablet} {
        padding: 0rem .5rem;
    }

    @media ${device.laptop} {
        list-style-type: none;
        display: flex;
        align-items: center;
        padding: 0rem 1rem;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #C5C6C7;

    &:hover {
        text-decoration: none;
        color: #808080;
    }
`;
/*the icon that shows in smaller screens*/
const Hamburger = styled.div`
    position: absolute;
    top: 1.25rem;
    left: 1.5rem;

    @media ${device.tablet} {
        display: none;
    }
`;

const ShoppingCart = styled.div`
    position: absolute;
    top: 1.25rem;
    right: 1.5rem;

    @media ${device.tablet} {
        display: none;
    }
`;

const StyledUlist = styled.div`
    display: block;
    width: 100%;
    padding: 0rem;
    margin-top: 0.1rem;
    background-color: #0C0032;

    @media ${device.tablet} {
        display: none;
    }
`;

const CategoryWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    margin-bottom: 0px;
    padding: 0rem;
    margin-top: 4rem;
`;

const StyledList = styled.div`
    list-style-type: none;
    display: flex;
    justify-content: center;
    padding: 0.1rem 2rem;
    border-bottom: .1rem solid #C5C6C7;
`;



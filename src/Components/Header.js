import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar>
            <Wrapper>
                <Title>Celestial Books</Title>
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
    );
}

export default Header;

/*Styling for the header using styled components */
const Navbar = styled.div`
    height: 10vh;
    background-color: #0C0032;
    color: #C5C6C7;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;    
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin: 0vh 10vw;
    padding: 2vh 0vw;
`;

const Title = styled.div`
    font-size: 30px;
    padding: 0px 10px;
`;

const NavbarContent = styled.div`
    font-size: 16px;
`;
 
export const StyledUl = styled.div`
    padding: 0px;
    display: inline-flex;
    justify-content: space-around;
`;

export const StyledLi = styled.div`
    list-style-type: none;
    display: flex;
    align-items: center;
    padding: 0px 10px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #C5C6C7;
`;

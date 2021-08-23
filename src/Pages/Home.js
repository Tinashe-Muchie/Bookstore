import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../Components/Header';
import { device } from '../Components/index';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <Body>
            <HomeWrapper>
                <Container>
                <TextWrapper>
                    <H1>Find your book and lose yourself.</H1>  
                    <StyledLink to='/accounting'>
                        Start shopping
                    </StyledLink>  
                </TextWrapper>
                <ImgWrapper>
                    <ImgContainer>
                        <Img src='../5amclub.jpg' alt='cover-image' />
                        <Img src='../agile.jpg' alt='cover-image' />
                    </ImgContainer>
                    <ImgContainer>
                        <Img src='../sleep.jpg' alt='cover-image' />
                        <Img src='../strangers.jpg' alt='cover-image' />
                    </ImgContainer>
                </ImgWrapper>
                </Container>
            </HomeWrapper>
        </Body>
    );
}

export default Home;

/*styling */
const Body = styled.div`
    display: block;
    width: 100%;
    color: #0C0032;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    margin-top: 0;
`;

const HomeWrapper = styled(Wrapper)`
    margin-top: 4.5rem;

    @media ${device.tablet} {
        margin-top: 0rem;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;

    @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    padding: 4rem;
`;

const H1 = styled.div`
    font-size: 1.3rem;
    padding:.5rem;

    @media ${device.laptop} {
        font-size: 2.5rem;
        padding: .5rem;
    }
`;

const StyledLink = styled(Link)`
    padding: .5rem;
    text-decoration: none;
    background-color: #C5C6C7;
    color: #0C0032;
    border: hidden;
    border-radius: .5rem;
    text-align: center;

    &:hover {
        text-decoration: none;
        background-color: #0C0032;
        color: #C5C6C7;
    }
`;

const ImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding: .5rem;
    border-radius: .3rem;
    margin-left: 1.8rem;
`;

const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-items: space-between;
    align-items: space-between;
`;

const Img = styled.img`
    width: 10rem;
    height: 14rem;
    border-radius: .75rem;
    padding: .2rem .5rem;
    transform: rotate(20deg)
`;


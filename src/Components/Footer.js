import React from 'react';
import styled from 'styled-components';
import { device } from './index';

function Footer() {

    const date = new Date();
    const year = date.getFullYear();
    
    return (
        <Foot>
            <Wrapper>
                <H3>
                    Copyright &copy; {year}
                </H3>
            </Wrapper>
        </Foot>
    );
}

export default Footer;

/*styled components*/

const Foot = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    height: 4rem;
    background-color: #0C0032;
    color: #C5C6C7;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif; 
    margin-top: auto;   
`;

const Wrapper = styled.div`
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

const H3 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: 1rem;
`;
import { device } from '../Components/index';
import styled, { keyframes } from 'styled-components';

/*Styling using styled components*/
export const Wrapper = styled.div`
    margin: 0rem 0rem;
    margin-bottom: 5rem;
    margin-top: 4.5rem;

    @media ${device.tablet} {
        margin: 0vh 10vw;
        padding: 2vh 0vw;
        margin-bottom: 5rem;
    }
`;

 export const StyledUOL = styled.ul`
    padding: 0px 10px;
`;

export const GridContainer =styled.div`
    display: grid;
    grid-template-columns: repeat(1, .5fr);
    gap: 1rem 0.1rem;
    justify-content: center;
    margin: .5rem 0rem;

    @media ${device.mobileM} {
        grid-template-columns: repeat(2, .5fr);
        gap: 1rem 0.1rem;
        justify-items: center;
    }

    @media ${device.tablet} {
        grid-template-columns: repeat(3, 2fr);
        gap: 1.5rem .25rem;
    }

    @media ${device.laptop} {
        grid-template-columns: repeat(5, 3fr);
        gap: 1rem .75rem;
    }

    @media ${device.desktop} {
        grid-template-columns: repeat(8, 3fr);
        gap: 1rem .75rem;
    }
`;

const scale = keyframes`
    0% {transform: scale(0, 0)}
    100% {transform: scale(2, 2)}
`;
export const Loader = styled.div`
    height: 4rem;
    width: 4rem;
    background-color: #0C0032;
    border-radius: 50%;
    display: inline-block;
    animation: ${scale} 3s ease-in-out infinite;
`;

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 3rem;
    margin-top: 5rem;
`;
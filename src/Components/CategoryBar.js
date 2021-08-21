import React from 'react';
import styled from 'styled-components';
import { CategoryData } from './CategoryData';
import { device } from './index';
import { StyledLink } from './Header';

function CategoryBar() {
    return (
        <>
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
        <Divider />
        </>
    );
}

export default CategoryBar;

 const CategoryWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
        font-family: 'STIX+Two+Text', Georgia, serif;
        margin-bottom: 0px;
        padding-bottom: 0rem;

        @media ${device.tablet} {
            margin-top: 4rem;
        } 
`;

export const Divider = styled.hr`
    display: none;

    @media ${device.tablet} {
        display: block;
        border: 0.01rem solid #bbb;
    }
`;

export const StyledList = styled.div`
    list-style-type: none;
    display: flex;
    align-items: center;
    padding: 0rem 2rem;

    @media ${device.tablet} {
        padding-top: 0.75rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    @media ${device.laptop} {
        padding-top: 0.75rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

export const StyledUlist = styled.div`
    display: none;

    @media ${device.tablet} {
        padding: 0px;
        display: inline-flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: transparent;
    }
`;

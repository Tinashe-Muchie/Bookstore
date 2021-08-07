import React from 'react';
import styled from 'styled-components';
import { CategoryData } from './CategoryData';
import { 
    Wrapper,
    StyledLi,
    StyledUl,
    StyledLink } from './Header';

function CategoryBar() {
    return (
          <CategoryWrapper>
              <StyledUl>
                {
                    CategoryData.map((data, index)=> (
                        <StyledLi key={index}>
                            <StyledLink to={data.link}>
                                {data.title}
                            </StyledLink>
                        </StyledLi>
                    ))
                }
              </StyledUl>
          </CategoryWrapper>
    );
}

export default CategoryBar;

const CategoryWrapper = styled(Wrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
`;

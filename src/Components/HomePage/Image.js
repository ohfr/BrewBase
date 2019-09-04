import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-image: url('https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    background-repeat: no-repeat;
    background-size: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledH1 = styled.h1`
    color: #1365F1;
    font-size: 4rem;
    text-align: center;
    // background: rgba(255, 255, 255, .2);
    padding: 10px;
`;

const Image = () => {
    return (
        <StyledDiv>
            <StyledH1>Find your local breweries</StyledH1>
        </StyledDiv>
    )
}
export default Image;
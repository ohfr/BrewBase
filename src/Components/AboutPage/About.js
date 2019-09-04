import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    text-align: center;
    font-size: 2rem;
`;

const StyledP = styled.p`
    font-size: 1.5rem;
`;

const About = () => {
    return (
        <div>
            <StyledH2>About BrewBase:</StyledH2>
            <StyledP>BrewBase was built using React, React Router, Styled-Components, and Axios.</StyledP>
        </div>
    )
}

export default About;
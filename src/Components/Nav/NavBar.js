import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavSearch from './NavSearch';

const StyledLink = styled(Link)`
    font-size: 1.2rem;
    margin-bottom: 10px;
    text-decoration: none;
    color: white;

    &:hover {
        color: black;
        text-decoration: underline;
    }
`;

const StyledH1 = styled.h1`
    font-size: 2rem;
    color: white;
`;

const NavBar = (props) => {
    return (
        <nav>
            {/* don't forget to use logo you made, check your email */}
            <StyledH1>BrewBase</StyledH1>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/About'>About</StyledLink>
            <NavSearch search={props.search}/>
        </nav>
    )
}

export default NavBar;
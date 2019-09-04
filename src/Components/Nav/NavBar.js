import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavSearch from './NavSearch';

const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    justify-content: space-between;
    background: #1365F1;
`;
const StyledLink = styled(Link)`
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-decoration: none;
    color: white;
    &:hover {
        color: black;
        text-decoration: underline;
    }
`;


const StyledImg = styled.img`
    width: 20%;
    height: 20%;
    margin-bottom: 10px; 
`;

const NavBar = (props) => {
    return (
        <StyledNav>
            {/* don't forget to use logo you made, check your email */}
            <StyledImg src={require('../../Assets/logo-sideways.png')} />
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/Likes'>Favorites</StyledLink>
            <StyledLink to='/About'>About</StyledLink>
            <NavSearch search={props.search}/>
        </StyledNav>
    )
}

export default NavBar;
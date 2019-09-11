import React,  { useState } from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Menu from '@material-ui/core/Menu';
import { MenuItem } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
    LinkElement: {
        color: 'black',
        textDecoration: 'none'
    },
    selectedLink: {
        textDecoration: 'underline',
        
    }
    }));


// import styled from 'styled-components';
// import NavSearch from './NavSearch';

// const StyledNav = styled.nav`
//     width: 100%;
//     display: flex;
//     flex-flow: row wrap;
//     align-items: flex-end;
//     justify-content: space-between;
//     background: #1365F1;
// `;
// const StyledLink = styled(Link)`
//     font-size: 1.5rem;
//     margin-bottom: 10px;
//     text-decoration: none;
//     color: white;
//     &:hover {
//         color: black;
//         text-decoration: underline;
//     }
// `;


// const StyledImg = styled.img`
//     width: 20%;
//     height: 20%;
//     margin-bottom: 10px; 
// `;

// const NavBar = (props) => {
//     return (
//         <StyledNav>
//             {/* don't forget to use logo you made, check your email */}
//             <StyledImg src={require('../../Assets/logo-sideways.png')} />
//             <StyledLink to='/'>Home</StyledLink>
//             <StyledLink to='/Likes'>Favorites</StyledLink>
//             <StyledLink to='/About'>About</StyledLink>
//             <NavSearch search={props.search}/>
//         </StyledNav>
//     )
// }

// export default NavBar;

const NavBar = (props) => {
    const classes= useStyles();
    const [anchorEl, setAnchorEl] = useState(null)

    const [searchItem, setSearchItem] = useState("");

    const handleChange = e => {
        setSearchItem(e.target.value);
      }
  
      const handleSubmit = e => {
        e.preventDefault();
        props.search(searchItem);
        setSearchItem("");
      }
  
      const handleClose = () => {
        setAnchorEl(null);
      }
  
      const handleClick = e => {
        setAnchorEl(e.currentTarget);
      }

    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handleClick}
            >
             <MenuIcon /> 
            </IconButton>
            <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
            <NavLink activeClassName={classes.selectedLink} className={classes.LinkElement} to="/">Home</NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <NavLink activeClassName={classes.selectedLink} className={classes.LinkElement} to="/Likes">Favorites</NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink activeClassName={classes.selectedLink} className={classes.LinkElement}to="/About">About</NavLink>
            </MenuItem>
  
          </Menu>
            <Typography className={classes.title} variant="h6" noWrap>
              BrewBase  
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <form onSubmit={handleSubmit}>
              <InputBase
                placeholder="Search your City"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                value={searchItem}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'search' }}
                
              />
              </form>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default NavBar;
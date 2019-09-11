import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Menu from '@material-ui/core/Menu';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { MenuItem } from '@material-ui/core';

import { NavLink } from 'react-router-dom';



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
  card: {
    width: 345,
    height: 245,
    margin: '10px'
  },
  cards: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',

  },
  backDrop: {
    background:"linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.4)), url(https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',


  },
  h1: {
    color: 'white',
    fontSize: '2rem'
  },
  LinkElement: {
    textDecoration: 'none',
    color: 'black'
  },
  selectedLink: {
    textDecoration: "underline",
  }
}));


const Dashboard = (props) => {
    const classes=useStyles();
    const [liked, setLiked] = useState([{}]);
    
    const handleLike = (item, index) => {
      props.likePicker(item, index);
      
    }

    return (
  <div>
    <div className={classes.backDrop}>
      <h1 className={classes.h1}>Find your local breweries</h1>
    </div>
    <div className={classes.cards}>
      {
        props.data.map((card, index) => {
          return (
            <Card className={classes.card} key={card.id}>
              <CardHeader
                title={card.name}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {card.street}, {card.city}, {card.state}, {card.postal_code}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton value={index} aria-label="add to favorites" onClick={() => handleLike(card, index)}>
                  <FavoriteIcon  color={!liked ? "secondary" : "action"} />
                </IconButton>
              </CardActions>
            </Card>
          )
        })
      }

    </div>

  </div>

    );
}

export default Dashboard;
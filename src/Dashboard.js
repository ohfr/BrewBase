import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '20px',
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

  }
}));


const Dashboard = (props) => {
    const classes=useStyles();
    const [liked, setLiked] = useState([{
      id: '',
      isLiked: false
    }]);
    
    const handleLike = (e) => {
      setLiked([
        ...liked,
        {
        id: e.currentTarget.value,
        isLiked: true
        }

      ])
      console.log(liked)
    }
    return (
  <div>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
           <MenuIcon /> 
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            BrewBase  
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              
            />
          </div>
        </Toolbar>
      </AppBar>
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
                <IconButton value={index} aria-label="add to favorites" onClick={handleLike}>
                  <FavoriteIcon  color={liked.isLiked ? "secondary" : "action"} />
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
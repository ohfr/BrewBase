import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    wrapper: {
        backgroundImage: 'url("https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    header: {
        color: '#1365F1',
        fontSize: '4rem',
        textAlign: 'center',
        padding: '10px',
    }
})


const Image = () => {
    const classes=useStyles();
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.header}>Find your local breweries</h1>
        </div>
    )
}
export default Image;
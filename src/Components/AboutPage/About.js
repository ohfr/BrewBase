import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        textAlign: 'center',
        fontSize: '2rem',
    },
    pTag: {
        fontSize: '1.5rem',
    }
})


const About = () => {
    const classes=useStyles();

    return (
        <div>
            <h2 className={classes.header}>About BrewBase:</h2>
            <p className={classes.pTag}>BrewBase was built using React, React Router, Material-UI, and Axios.</p>
        </div>
    )
}

export default About;
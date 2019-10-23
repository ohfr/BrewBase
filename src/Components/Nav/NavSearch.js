import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    input: {
        marginBottom: '10px',
    }
})

const NavSearch = (props) => {
    const classes=useStyles();
    const [searched, setSearched] = useState("");
    
    const changeHandler = (e) => {
        setSearched(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        props.search(searched);
        setSearched("")
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="Search"></label>
            <input className={classes.input} onChange={changeHandler} type="text" name="Search" placeholder="Search your city" value={searched} />

            <button type="submit">Submit</button>
        </form>
    )
}

export default NavSearch;
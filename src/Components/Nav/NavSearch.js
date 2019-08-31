import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    margin-bottom: 10px;
`;

const NavSearch = (props) => {
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
            <StyledInput onChange={changeHandler} type="text" name="Search" placeholder="Search your city" value={searched} />

            <button type="submit">Submit</button>
        </form>
    )
}

export default NavSearch;
import React, { useState, createContext, useReducer} from 'react';

const Context = createContext();

const initState = [{
    id: '',
    liked: false,
}]

const Store = (props) => {
    const reducerHook = useReducer();

    return (
        <Context.Provider value={}>
            {props.children}
        </Context.Provider>
    )
}


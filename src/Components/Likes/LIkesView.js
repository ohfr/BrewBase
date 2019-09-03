import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBeer} from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';



const LikesView = (props) => {
    // push this state up to app js, make this component dumb... that didn't work
    return (
        <FontAwesomeIcon icon={faBeer} color={props.liked ? "red" : "black"} onClick={() => props.changeLike(props.item, props.key)} />
    )
}

export default LikesView;
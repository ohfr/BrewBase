import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';



const LikesView = (props) => {

    // push this state up to app js, make this component dumb
    const [isLiked, setIsLiked] = useState(false)
    return (
        <FontAwesomeIcon icon={faHeart} color={isLiked ? "red" : "black"} onClick={() => setIsLiked(!isLiked)} />
    )
}

export default LikesView;
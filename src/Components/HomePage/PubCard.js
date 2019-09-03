import React, {useState}  from 'react';
import LikesView from '../Likes/LikesView';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 25%;
    height: 25%;
    border: 2px solid black;
    padding: 10px;
    margin: 10px;
`;

const PubCard = props => {
    const [liked, setLiked] = useState(false);

    const changeLike = (item, index) => {
        setLiked(!liked)

        props.likePicker(item, index);
    }

    
    return (
        // add website url and phone number
        <StyledDiv>
            <h2>{props.name}</h2>
            <address>
                {props.address}, {props.city}, {props.state}, {props.zip}
            </address>
            <LikesView item={props.item} liked={liked} changeLike={changeLike} />
        </StyledDiv>
    )
}

export default PubCard;


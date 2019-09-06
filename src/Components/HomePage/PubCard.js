import React, {useState}  from 'react';
import styled from 'styled-components';
import LikesView from '../Likes/LikesView';


const StyledDiv = styled.div`
    width: 25%;
    height: 25%;
    border: 2px solid black;
    padding: 10px;
    margin: 10px;
    color: black;
    background: rgba(255, 255, 255, .6);
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
`;

const StyledAdress = styled.address`
    padding: 10px 0 10px 0;
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
            <StyledAdress>
                {props.address}, {props.city}, {props.state}, {props.zip}
            </StyledAdress>
            <LikesView item={props.item} liked={liked} changeLike={changeLike} />
        </StyledDiv>
        
    )
}

export default PubCard;


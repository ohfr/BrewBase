import React from 'react';
import PubCard from '../HomePage/PubCard';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    font-size: 2rem;
    text-align: center;
`;
const StyledDiv = styled.div`
    
`;

const StyledH3 = styled.h3`
    font-size: 1.5rem;
`;

const Likes = (props) => {
    return (

        // map over array state of liked items 
        <StyledDiv>
            <StyledH2>Favorites:</StyledH2>
            {props.likedItem.length === 0 ? <StyledH3>No likes yet ): </StyledH3> : props.likedItem.map((card, index) => {
            return <PubCard name={card.name} city={card.city} zip={card.postal_code} address={card.street} state={card.state} card={card} key={card.id} likePicker={props.likePicker} likedItem={props.likedItem} id={index}/>
            })}
        </StyledDiv>
        
    )
}

export default Likes;
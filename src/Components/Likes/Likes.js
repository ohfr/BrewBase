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
            {props.likedItems.length === 0 ? <StyledH3>No likes yet ): </StyledH3> : props.likedItems.map((item, index) => {
            return <PubCard name={item.name} city={item.city} zip={item.postal_code} address={item.street} state={item.state} item={item} key={index} likePicker={props.likePicker}/>
            })}
        </StyledDiv>
        
    )
}

export default Likes;
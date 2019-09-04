import React from 'react';
import PubCard from '../HomePage/PubCard';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    font-size: 2rem;
`;

const Likes = (props) => {
    return (

        // map over array state of liked items 
        <div>
            <StyledH2>Favorites:</StyledH2>
            {props.likedItems.length === 0 ? <h3>No likes yet ): </h3> : props.likedItems.map((item, index) => {
            return <PubCard name={item.name} city={item.city} zip={item.postal_code} address={item.street} state={item.state} item={item} key={index} likePicker={props.likePicker}/>
            })}
        </div>
        
    )
}

export default Likes;
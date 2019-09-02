import React from 'react';
import PubCard from '../HomePage/PubCard';

const Likes = (props) => {
    return (

        // map over array state of liked items 
        <div>
            {props.likedItems.length === 0 ? <h1>No likes yet ): </h1> : props.likedItems.map((item, index) => {
            return <PubCard name={item.name} city={item.city} zip={item.postal_code} address={item.street} state={item.state} item={item} key={index} likePicker={props.likePicker}/>
            })}
        </div>
        
    )
}

export default Likes;
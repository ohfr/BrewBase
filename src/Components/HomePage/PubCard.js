import React from 'react';
import LikesView from '../Likes/LIkesView';

const PubCard = props => {
    return (
        <div className="pubCard">
            <h2>{props.name}</h2>
            <address>
                {props.address}, {props.city}, {props.state}, {props.zip}
            </address>
            <LikesView />
        </div>
    )
}

export default PubCard;
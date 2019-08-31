import React from 'react';

const PubCard = props => {
    return (
        <div className="pubCard">
            <h2>{props.name}</h2>
            <address>
                {props.address}, {props.city}, {props.state}, {props.zip}
            </address>
        </div>
    )
}

export default PubCard;
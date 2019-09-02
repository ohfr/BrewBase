import React, {useState}  from 'react';
import LikesView from '../Likes/LikesView';

const PubCard = props => {
    const [liked, setLiked] = useState(false);

    const changeLike = (item, index) => {
        setLiked(!liked);

        // VVV this will have to get changed to allow for deleting liked items from list
        props.likePicker(item, index);
    }

    
    return (
        <div className="pubCard">
            <h2>{props.name}</h2>
            <address>
                {props.address}, {props.city}, {props.state}, {props.zip}
            </address>
            <LikesView item={props.item} key={props.key} liked={liked} changeLike={changeLike} />
        </div>
    )
}

export default PubCard;
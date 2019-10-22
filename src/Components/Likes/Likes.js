import React from 'react';
import PubCard from '../HomePage/PubCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        fontSize: '2rem',
        textAlign: 'center',
    },
    cards: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    subHeader: {
        fontSize: '1.5rem'
    }
})

const Likes = (props) => {
    const classes=useStyles();
    return (
        // map over array state of liked items 
        <div className={classes.wrapper}>
            <h2 className={classes.header}>Favorites:</h2>
            <div className={classes.cards}>
                {props.likedItem.length === 0 ? <h3 className={classes.subHeader}>No likes yet ): </h3> : props.likedItem.map((card, index) => {
                return <PubCard name={card.name} city={card.city} zip={card.postal_code} address={card.street} state={card.state} card={card} key={card.id} likePicker={props.likePicker} likedItem={props.likedItem} id={index}/>
                })}
            </div>
        </div>
        
    )
}

export default Likes;
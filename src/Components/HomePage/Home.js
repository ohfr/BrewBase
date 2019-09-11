import React from 'react';
import PubCard from './PubCard';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    backDrop: {
        background:"linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.4)), url(https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    
    
      },
      h1: {
        color: 'white',
        fontSize: '2rem'
      },
      cards: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
      }
}));
// import styled from 'styled-components';

// const StyledDiv = styled.div`
//     display: flex;
//     flex-flow: row wrap;
//     justify-content: space-between;
//     background: lightgray;
// `;

// const Home = (props) => {
//     return (
//         <div>
//             {/* other components here */}
//             {/* should get pub props to give to each component on screen */}
//             <Image />
//             <StyledDiv>
//                 {props.pubName.length === 0 ? <h3>There are no breweries near you ): </h3> : props.pubName.map((item, index) => {
//                     return <PubCard  id={index} item={item} likePicker={props.likePicker} name={item.name} key={item.id} address={item.street} city={item.city} state={item.state} zip={item.postal_code}/>
//                 })}
//             </StyledDiv>
//         </div>
//     )
// }

const Home = (props) => {
    const classes= useStyles();
    return (
        <div>
            <div className={classes.backDrop}>
                <h1 className={classes.h1}>Find your local breweries</h1>
            </div>
            <div className={classes.cards}>
            {
                props.data.map((card, index) => {
                    return (
                        <PubCard card={card} id={index} key={card.id} city={card.city} state={card.state} zip={card.postal_code} street={props.street} name={card.name} likePicker={props.likePicker} />
                    )
                }) 
            }
            </div>
        </div>
    )
}
export default Home;
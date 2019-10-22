import React, {useState, useEffect}  from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme =>({
    card: {
        width: 345,
        height: 245,
        margin: '10px'
      },
      cards: {
        display: 'flex',
        flexFlow: "row wrap",
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        }
}));


// const StyledDiv = styled.div`
//     width: 25%;
//     height: 25%;
//     border: 2px solid black;
//     padding: 10px;
//     margin: 10px;
//     color: black;
//     background: rgba(255, 255, 255, .6);
//     display: flex;
//     flex-flow: column wrap;
//     align-items: center;
//     justify-content: center;
// `;

// const StyledAdress = styled.address`
//     padding: 10px 0 10px 0;
// `;

// const PubCard = props => {
//     const [liked, setLiked] = useState(false);

//     const changeLike = (item, index) => {
//         setLiked(!liked)

//         props.likePicker(item, index);
//     }

    
//     return (
//         // add website url and phone number
//         <StyledDiv>
//             <h2>{props.name}</h2>
//             <StyledAdress>
//                 {props.address}, {props.city}, {props.state}, {props.zip}
//             </StyledAdress>
//             <LikesView item={props.item} liked={liked} id={props.id} changeLike={changeLike} />
//         </StyledDiv>
        
//     )
// }

const PubCard = (props) => {
    const classes= useStyles();

    const changeLike = (item) => {
        props.likePicker(item);

    }

    // useEffect(() => {
    //     props.likedItem.includes(props.card) ? setLiked(true) : setLiked(false);

    // }, [])

    return (
        <div className={classes.cards}>
            <Card className={classes.card}>
              <CardHeader
                title={props.name}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {props.street}, {props.city}, {props.state}, {props.zip}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton value={props.id} aria-label="add to favorites" onClick={() => changeLike(props.card)}>
                  <FavoriteIcon  color={props.likedItem.includes(props.card) ? "secondary" : "action"} />
                </IconButton>
              </CardActions>
            </Card>
        </div>
    )
}

export default PubCard;


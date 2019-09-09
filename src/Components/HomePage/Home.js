import React from 'react';
import PubCard from './PubCard';
import Image from './Image';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background: lightgray;
`;

const Home = (props) => {
    return (
        <div>
            {/* other components here */}
            {/* should get pub props to give to each component on screen */}
            <Image />
            <StyledDiv>
                {props.pubName.length === 0 ? <h3>There are no breweries near you ): </h3> : props.pubName.map((item, index) => {
                    return <PubCard  id={index} item={item} likePicker={props.likePicker} name={item.name} key={item.id} address={item.street} city={item.city} state={item.state} zip={item.postal_code}/>
                })}
            </StyledDiv>
        </div>
    )
}
export default Home;
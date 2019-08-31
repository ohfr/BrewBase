import React from 'react';
import PubCard from './PubCard';
import Image from './Image';

const Home = (props) => {
    return (
        <div>
            {/* other components here */}
            {/* should get pub props to give to each component on screen */}
            <Image />
            <div className="pubs">
                {props.pubName.length === 0 ? <h3>There are no breweries near you ): </h3> : props.pubName.map((item, index) => {
                    return <PubCard name={item.name} key={index} address={item.street} city={item.city} state={item.state} zip={item.postal_code}/>
                })}
            </div>
        </div>
    )
}
export default Home;
import React from 'react';
import Card from './Card';

// Passes the appropriate information down to Card using properties
const CardList = ({StreamingDetails}) => {

const cardComponenet = StreamingDetails.map((element, i) => {
  return ( <Card 
            key={StreamingDetails[i].title}
            name={StreamingDetails[i].title}
            url={StreamingDetails[i].images["Poster Art"].url} 
          /> 
        );  
})

    return (
        <div> 
           {cardComponenet}
        </div> 
    );
}

export default CardList;

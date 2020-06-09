import React from 'react';
import './Card.css';


// Destructuring of the props that were passed in
// <img alt = 'Movietitle' src = {cover} width='200px'/> 
const Card = (props) => {
    return (
        <div className = 'custom pa2 tc bg-light-green dib br3 ma1 grow bw2 shadow-5'> 
            <img alt='movie' src={props.url} />
            <div className = 'words'>
                <h6> {props.name} </h6>
            </div>     
        </div>
    );
}

export default Card;
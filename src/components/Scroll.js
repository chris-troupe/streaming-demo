import React from 'react';

const Scroll = (props) => {
    // Scroll component so that the header and footer stay, can be used to wrap any componenet
    return(
        <div style = {{overflowY: 'scroll', border: '2px solid black', height: '33rem'}}>
            {props.children}
        </div>
    );
}

export default Scroll;
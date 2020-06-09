import React from 'react';

const SearchBox = ({searchChange}) => {
    // onChange runs the function to register the event and change the cards
    return (
        <div> 
            <input 
                className='pa3 ma3 ba b--green bg-lightest-blue'
                type ='search' 
                placeholder = 'search by title'
                onChange={searchChange}
            />
        </div> 


    );
}

export default SearchBox;
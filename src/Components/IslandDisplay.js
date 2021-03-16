import React from 'react';

const IslandDisplay = (props) => {

const {islandItem, img, addToPockets} = props;
    return (
        <button className='island-item-button'
        onClick={()=> addToPockets(islandItem)}>

            <img 
            className='island-item-image' 
            src={img}
            alt=''/>
           

        </button>
    )
}
export default IslandDisplay;
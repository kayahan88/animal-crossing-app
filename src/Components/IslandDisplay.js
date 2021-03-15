import React from 'react';

const IslandDisplay = (props) => {

const {islandItem, img, addToPockets} = props;
    return (
        <div className='island-item'>

            <img 
            className='item-image' 
            onClick={()=> addToPockets(islandItem)} 
            src={img}
            alt=''/>
           

        </div>
    )
}
export default IslandDisplay;
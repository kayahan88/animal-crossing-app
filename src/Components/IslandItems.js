import React from 'react';

const IslandItems = (props) => {


    return (
        <div className='island-item'>
            <img className='item-image' src={props.islandItem.img}/>
            
            <input placeholder='how many do you want?' onChange={props.handleInputFn}/>
            <button onClick={props.pickUpFn}>pick up!</button>
        </div>
    )
}
export default IslandItems;
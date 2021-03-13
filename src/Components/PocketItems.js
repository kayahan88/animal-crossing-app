import React from 'react';

const PocketItems = (props) => {


    return (
        <div className='pocket-item'>
            <p>{props.pocketItem.name}</p>
            <p>{props.pocketItem.quantity}</p>
        </div>
    )


}
export default PocketItems;
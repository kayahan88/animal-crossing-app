import React from 'react';

const Pockets = (props) => {

const {pocketItem, img, id, updatePockets} = props;
    return (

        <div>
            <section className='island-item'>

                <img 
                className='item-image' 
                onClick={()=> updatePockets(id)} 
                src={img}
                alt=''/>
            

            </section>

            

        </div>
    )
}
export default Pockets;
import React, {Component} from 'react';
import axios from 'axios';
import PocketItems from './PocketItems';


class Pockets extends Component {
    constructor(){
        super();
        this.state = {
            pocketItems: [],
            quantity: null
        }
        this.pickUpItems = this.pickUpItems.bind(this);
        this.dropItem = this.dropItem.bind(this);
    }

    //axios.get to show pocket items, which is nothing at first
    getPocketItems = () => {
        axios.get('/api/pocket-items')
            .then(res => {
                this.setState({ pocketItems: res.data })
            })
    }

    
    
    
    //axios.delete to drop an individual item
    dropItem = (id) => {
        axios.delete(`/api/pocket-items/${id}`)
            .then(res => {
                this.setState({ pocketItems: res.data })
            })
    }
    

    render(){
        const mappedPocketItems = this.state.pocketItems.map((item, i) => (
            
            <PocketItems 
                key={i}
                pocketItem={item}
                />
        ))

        return (
            <div className='mapped-pockets-container'>{mappedPocketItems}</div>
        )
    }
}
export default Pockets;
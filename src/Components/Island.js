import React, { Component } from 'react';
import axios from 'axios';
import islandItems from '../items';
import IslandItems from './IslandItems';
import Pockets from './Pockets'

class Island extends Component {
    constructor(){
        super();
        this.state = {
            islandItems,
            
            userInput: ''
        }
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount(){
        this.getIslandItems();
    };

    //axios.get to show island items
    getIslandItems = () => {
        axios.get('/api/island-items')
            .then(res => {
                this.setState({ islandItems: res.data })
            })
    };

    //edit quantity function
    editQuantity = (id, newQuantity) => {
        let body = {quantity: newQuantity}
        axios.put(`/api/pocket-items/${id}`, body)
            .then(res => {
                this.setState({ islandItems: res.data })
            })
    };

    handleInput(e) {
        this.setState({ userInput: e.target.value })
        console.log(this.state.userInput)
    };

    //axios.post to put the island items in the pockets -- pick up item function?
    pickUpItem = () => {
        axios.post('/api/pocket-items:id')
            .then(res => {
                this.setState({ pocketItems: res.data })
                this.setState({ userInput: '' })
            })
            
    };

    render(){
        const mappedIslandItems = this.state.islandItems.map((item, i) => (
            //send IslandItems.js the pickUpItem function as a prop, so that you can you can create a 'pick up' button and connect it to this function 
            //send IslandItems.js the handleInput function as a prop sot hat you can create an input box and connect it on an onChange event and connect it to this function
            <IslandItems
                key={i}
                islandItem={item}
                editQFn={this.editQuantity}
                pickUpFn={this.pickUpItem}
                handleInputFn={this.handleInput}/>
        ))
        return (
            <div className='mapped-items-container'>{mappedIslandItems}</div>
        )
    }
}
export default Island;
import React, { Component } from 'react';
import axios from 'axios';
import IslandDisplay from './IslandDisplay';
import Pockets from './Pockets'

class Island extends Component {
    constructor(){
        super();
        this.state = {
            islandItems: [],
            pockets: []
        }
        this.addToPockets = this.addToPockets.bind(this)
        this.updatePockets = this.updatePockets.bind(this)
        this.clearPockets = this.clearPockets.bind(this)
    }

    componentDidMount() {
        console.log('didMount')
        axios.get('/api/island-items')
        .then(res => {
            const {islandItems, pockets} = res.data
            this.setState({ 
                islandItems: islandItems
                   
            })
        })
    };

    addToPockets(item){
        console.log('clicked')
        console.log(item)
        axios.post('/api/pocket-items/', item)
        .then(res => {
            console.log(res.data)
            const {pockets} = res.data
            this.setState({
                pockets: pockets
            })
        })
    }

    updatePockets = (id) => {
        id = +id
        let pockets = this.state.pockets;
        axios.put(`/api/pocket-items/${id}`, pockets)
            .then(res => {
                this.setState ({ pockets: res.data })
            })
    }
    
    clearPockets = () => {
        let pockets = this.state.pockets
        // console.log('clear')
        axios.delete('/api/pocket-items/', pockets)
        
            .then(res => {
                const {pockets} = res.data
                this.setState({ pockets: pockets })
            })
    }
    
    render(){
        const mappedIslandItems = this.state.islandItems.map((item, i) => (
            
            <IslandDisplay
                key={i}
                islandItem={item}
                img={item.img}
                addToPockets={this.addToPockets}
                />))

        const mappedPocketItems = this.state.pockets.map((item, i) => (

            <Pockets 
                key={i}
                id={item.id}
                pocketItem={item}
                img={item.img}
                pockets={this.state.pockets}
                updatePockets={this.updatePockets}
                // clearPockets={this.clearPockets}
                />
        ))
                
        return (

            <div>
                <section className='mapped-items-container'>{mappedIslandItems}</section>

                <button 
                onClick={this.clearPockets}
                className='clear-pockets-button'>Clear Pockets!</button>

                <section className='mapped-pockets-container'>{mappedPocketItems}</section>

            </div>

            
        )
    }
}
export default Island;



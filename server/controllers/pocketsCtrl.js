const data = require('../items');


module.exports = {
    getPocketItems: (req, res) => {
        let pocketItems = data.pockets;
        res.status(200).send(pocketItems);
    },
    addToPockets: (req, res) => {
        let item = req.body;
        let pockets = data.pockets;

        
        
        let id = pockets.length
        ?  pockets[pockets.length-1].id+1
        :  0
        
        // console.log('the item is' + item)
        item.id = id
        pockets.push(item)
        // console.log('here is pockets' + pockets[0])
        res.status(200).send(data)
    },
    updatePockets: (req, res) => {
        const {id} = req.params

        let pockets = req.body
        data.pockets = pockets

        const droppedItem = pockets.findIndex(item => item.id === +id);
        data.pockets.splice(droppedItem, 1);
        res.status(200).send(data.pockets)
    },
    clearPockets: (req, res) => {
        // let pockets = [];
        data.pockets = [];

        res.status(200).send(data)
    },
    getIslandItems: (req, res) => {
        // console.log(data)
        res.status(200).send(data)
    }
}
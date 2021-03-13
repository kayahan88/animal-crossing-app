import items from './src/items.js';

module.exports = {

    getIslandItems: (req, res) => {
        res.status(200).send(items)
    },
    editQuantity: (req, res) => {
        const {id} = req.body;
        const {quantity} = req.body;
        const item = items.find(element => element.id === +id);
        item.quantity = quantity;
        res.status(200).send(items);
    }
}
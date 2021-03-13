import islandItems from '../../src/items'
const pocketItems = [];

module.exports = {
    getPocketItems: (req, res) => {
        res.status(200).send(pocketItems);
    },
    pickUpItems: (req, res) => {
        const {id} = req.params;
        const item = islandItems.find(element => element.id === +id)
        pocketItems.push(item);
        res.status(200).send(pocketItems);
    },
    dropItems: (req, res) => {
        const {id} = req.params;
        const index = pocketItems.findIndex(element => element.id === +id);
        pocketItems.splice(index, 1);
        res.status(200).send(pocketItems)
    }
}
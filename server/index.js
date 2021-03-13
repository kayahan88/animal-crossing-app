const express = require('express');
const pocketsCtrl = require('./controllers/pocketsCtrl');
const islandCtrl = require('./controllers/islandCtrl');
port = 3888;
app = express();

app.use(express.json());

//pocketsCtrl endpoints
app.get('/api/pocket-items', pocketsCtrl.getPocketItems);
app.post('/api/pocket-items/:id', pocketsCtrl.pickUpItems);
app.delete('/api/pocket-items/:id', pocketsCtrl.dropItems);


//islandCtrl endpoints
app.get('/api/island-items', islandCtrl.getIslandItems);
app.put('/api/pocket-items/:id', islandCtrl.editQuantity);

app.listen(port, () => console.log(`Island Getaway relaxing on ${port}`))
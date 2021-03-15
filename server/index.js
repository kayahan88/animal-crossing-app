const express = require('express');
const pocketsCtrl = require('./controllers/pocketsCtrl');

const port = 3888;
const app = express();

app.use(express.json());

//pocketsCtrl endpoints
app.get('/api/pocket-items', pocketsCtrl.getPocketItems);
app.post('/api/pocket-items/', pocketsCtrl.addToPockets);
app.put('/api/pocket-items/:id', pocketsCtrl.updatePockets);
app.delete('/api/pocket-items/', pocketsCtrl.clearPockets);
app.get('/api/island-items', pocketsCtrl.getIslandItems);


app.listen(port, () => console.log(`Island Getaway relaxing on port ${port}`))
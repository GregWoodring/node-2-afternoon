const express = require('express');
const bodyParser = require('body-parser');
const messages_controller = require('./controllers/messages_controller')

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public/build/'))

app.get('/api/messages', messages_controller.read);
app.post('/api/messages', messages_controller.create);
app.put('/api/messages/:id', messages_controller.update);
app.delete('/api/messages/:id', messages_controller.delete);



app.listen(3001, () => {
    console.log('I can hear you');
})
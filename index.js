var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');
var secret = 'app-secret';
var path = require('path');
const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions));
app.use(express.static(__dirname + '/dist/notes/'));
app.use(bodyParser.json());
app.use(session({ secret: secret, resave: true, saveUninitialized: true }));
app.secret = secret;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/notes', { useNewUrlParser: true });
var Schema = mongoose.Schema;
var authSchema = new Schema({ username: String, password: String });



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/notes/index.html'));
});

app.get('/test', (req, res) => {
    res.json({
        status: 200,
        message: 'success',
        data: 'Express working fine'
    })
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});

module.exports = app;
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const appRoute = require('./app/route'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('Running on port 3000 ...'));

appRoute(app);
// load config
var config = require('./config');
var config_path = config.path;
var port = config.port || 3000;

// Express Server on port 3000  (localhost:3000)
// Create a new express server
const express = require('express');
const app = express();

// set view engine to ejs
app.set('view engine', 'ejs');

// set up static files
app.use(express.static('public'));

// set up routes
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {});

// Create a new body parser
const bodyParser = require('body-parser');


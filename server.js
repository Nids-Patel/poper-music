// PARSE .ENV
//require('dotenv').config();

// Configuring the database
//require('./Configs/db.config.js');
const uri = process.env.MONGODB_URI;

// GLOBAL SETTINGS FILES
require('./Configs/globals'); 

// NODE FRAMEWORK
const express = require('express'); 

const cors= require("cors");

// TO PARSE POST REQUEST
const bodyParser = require('body-parser'); 

// Importing express-session module
const session = require('express-session');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 8600;

app.use(cors())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// SERVE STATIC IMAGES FROM ASSETS FOLDER
app.use(express.static(__dirname + '/Assets')); 

// --------------------------    ROUTES    --------------------------
const appRoutesV1 = require('./Routes/v1')
appRoutesV1(app)

// listen for requests
app.listen(port, () => {   
    console.log(`Server is listening on port ${port}`);
});

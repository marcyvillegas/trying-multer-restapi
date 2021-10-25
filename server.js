const express = require('express');
const mongoose = require('mongoose'); //package para ma connect sa db natin
require('dotenv').config(); //package for.env yuung di ata visible sa iba pag nag inspect elem
const bodyParser = require('body-parser'); //package that converts something into json
const path = require('path');
const cors = require('cors'); // to avoid CORS error

const app = express();

app.use(cors());

app.use(bodyParser.json());

//Import routes 
const productsRoute = require('./routes/products.routes');
const indicatorRoute = require('./routes/indicator.routes');

//Routes 
app.use('/products', productsRoute); 
app.use('/indicator', indicatorRoute); 


//Home route ata xD
app.get('/', (req, res) => { 
    res.send("You are in the home route");
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
    })
    .then(() => {
    console.log("Connected to the database");
    })
    .catch((err) => {
    console.log("There's an error", err);
    process.exit();
    })
    
//LISTEN
app.listen(8000);

//.env file - stores the database (username at pw dapat daw di nakikita so ayun. nag import din ako DOTENV para don)
//yung import routes sa taas, para lang malinis and hindi sa server.js din gumagawa ng routes ganern
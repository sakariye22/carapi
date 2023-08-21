const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const cors = require('cors');
require ('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const carsRoute = require('./routes/cars');

app.use('/cars', carsRoute)

mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.DB_CONNECTION, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  
  }, console.log('DB CONN'));

app.listen('3000');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const connectMongoDB = require('./config/db');


const signUp = require('./routes/signup')
const login = require('./routes/login')
const carPark = require('./routes/carpark')
const allCars = require('./routes/allCars')
const unPark = require('./routes/unPark')

connectMongoDB();

app.use(bodyParser());
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())


// app.use('/', (req, res) => {
//     res.send('sample')
// })

app.use('/api/signup', signUp)
app.use('/api/login', login)
app.use('/api/carpark', carPark)
app.use('/api/allcars', allCars)
app.use('/api/unpark', unPark)




module.exports = app;
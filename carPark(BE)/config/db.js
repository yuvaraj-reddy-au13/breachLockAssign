const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb+srv://yuvaraj-reddy-au13:yuvaraj@cluster0.4pbtw.mongodb.net/prac1?retryWrites=true&w=majority'



const connectMongoDB = () => {
    mongoose.connect(MONGODB_URL)
            .then(conn => console.log(conn.connection.host))
            .catch(err => console.log(err))
}


module.exports = connectMongoDB;
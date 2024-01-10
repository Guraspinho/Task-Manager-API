const mogoose = require('mongoose');


const connectionString = '';


const connectDB = (url) =>
{
    return mogoose.connect(url)
}


module.exports = connectDB;
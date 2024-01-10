const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/mongo');
require('dotenv').config();
const errorPage = require('./middlewares/not-found');
const errorHandler = require('./middlewares/errorHandler');

// Middlewares
app.use(express.static('./public'))
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);
app.use(errorHandler);
app.use(errorPage);



const port = process.env.PORT || 3000;

const start = async () =>
{
    try {
        await connectDB(process.env.mongoURI);
        app.listen( port , console.log(`Server listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();
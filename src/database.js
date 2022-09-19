import mongoose from 'mongoose';

require('dotenv').config()

const url = process.env.SERVIDOR;
mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('BD conectada');
});

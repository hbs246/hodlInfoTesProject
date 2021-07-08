import mongoose from 'mongoose';
import dotenv from 'dotenv';
import myRoutersPath from './routes'
import expressLayout from 'express-ejs-layouts';
import path from 'path'
dotenv.config();
const express = require("express");
const app = express();
const PORT = 1999 || process.env.APP_PORT;


// Database Connection

mongoose.connect(process.env.DB_CONNECION,{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',()=> console.log('Database Connected Successfully'))

// middleware
app.use(express.static('public'));
app.use(express.json());

// Set the template engine
app.set('view engine','ejs');
app.use(expressLayout);
app.set('views', path.join(__dirname ,'/views'));


// Routes

app.use(myRoutersPath);


app.listen(PORT , ()=>{
    console.log(`Server is starting at ${PORT} number`);
    
});
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
dotenv.config({ path:'./config.env' });
require('./db/conn');
require('./model/userSchema')

app.use(express.json());
app.use(require('./routes/auth'))



app.listen(PORT,()=>{
    console.log(`server is running at port: ${PORT}`);
})
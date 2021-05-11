
const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const config = require('./config/key');
const {User} = require('./models/User');

mongoose.connect(config.mongoURI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then(()=> console.log('DB Connected')).catch(err => console.log(err));

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('hello')
});

app.listen(5000);
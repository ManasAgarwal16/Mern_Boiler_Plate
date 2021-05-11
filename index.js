const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://manas:agarwal16@cluster0.tj1i8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=> console.log('DB Connected')).catch(err => console.log(err));



app.get('/',(req,res)=>{
    res.send('hello')
});

app.listen(5000);
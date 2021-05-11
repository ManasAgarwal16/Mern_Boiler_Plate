
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

app.use('/api/users', require('./routes/users'));

//use this to show the image you have in node js server to client (react js)
app.use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

    // Set static folder   
    // All the javascript and css files will be read and served from this folder
    app.use(express.static("client/build"));
  
    // index.html for all page routes    html or routing and naviagtion
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
  }
  
  const port = process.env.PORT || 5000
  
  app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
  });
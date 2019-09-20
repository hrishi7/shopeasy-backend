const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const fileupload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
require("dotenv").config();

cloudinary.config({
  cloud_name:'hrishi7',
  api_key:'541159897319149',
  api_secret:'8w0_0un3DGPm5_auzEgbCssRg4w'
});

const app = express();
app.use(fileupload({ useTempFiles: true}));
app.use(cors());

//Body parser Middleware
app.use(bodyParser.urlencoded({ extended: false,limit:'50mb' }));
app.use(bodyParser.json());

// DB Config
const db = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

//passport Config
// require("./config/passport.js")(passport);

//use routes admin
app.use('/api/admin/admins', require('./routes/api/admin/admins'));
app.use('/api/admin/products', require('./routes/api/admin/products'));

//use routes user

app.use('/api/user/users', require('./routes/api/user/users'));
app.use('/api/user/products', require('./routes/api/user/products'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`ShopEasy Server running on port ${port}`));

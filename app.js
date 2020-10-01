const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const cors = require("cors");


//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());


//IMPORT ROUTES
const postsRoute = require("./routes/posts")

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, 
 {
     useUnifiedTopology: true, 
     useNewUrlParser: true
 }, 
 () => console.log("Conected to db"))



app.use("/posts", postsRoute)



//LISTENER
app.listen(9000)
const express=require("express");
const bodyParser = require('body-parser');

const app =express();
const cors=require("cors")

const mongoose=require("mongoose");
const empRoute=require("./routes/empRoute")

app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(9000,()=>{
    console.log("server run on 9000 port")
})

'use strict';

const express = require("express");
const auth = require("./routes/auth");
const admin = require("./routes/admin");

var port = process.env.PORT || 3000;
var app = express();

app.listen(port, (err)=>{
    if (err) console.log("an error occurred while trying to start server");
    console.log(`Server running on port ${port}`);
});
app.use("/v1/auth", auth);
app.use("/v1/admin", admin);




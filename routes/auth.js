'use strict';

var express = require("express");
var router = express.Router();
var baseRoute = require("./baseroute");
var student = require("../models/student");
var jsonParser = require("body-parser").json();
var session = require("express-session");

router.get("/register", (req, res)=>{
    res.send("the register page");
});

/**
 * Register a student
 */
router.post("/register", jsonParser, (req, res)=>{
    
});

module.exports = router;

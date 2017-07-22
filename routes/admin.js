/**
 * Created by osho on 5/22/17.
 */
'use strict';

var express = require("express");
var router = express.Router();
var department = require("../models/department");
var staff = require("../models/staff");
var student = require("../models/student");
var baseRoute = require("./baseroute");
var jsonParser = require("body-parser").json();
var bcrypt = require("bcryptjs");


router.post("/department", jsonParser, (req, res)=>{
    let body = req.body;
    department.createDepartment(body.name, body.HOD, (err, result, fields)=>{
        if (err) {
            res.json(baseRoute.sendError(err));
        } else {
            res.json(baseRoute.sendSuccess({
                "name": body.name,
                "HOD": body.HOD
            }));
        }
    });
});

router.post("/department/dom", jsonParser, (req, res)=>{
    let body = req.body;
    department.createDepartmentOfMajor(body.name, body.id,(err, result, fields)=>{
        if (err) {
            console.log(err.stack);
            res.json(baseRoute.sendError(err));
        } else {
            res.json(baseRoute.sendSuccess({
                "name": body.name,
                "department_id": body.id
            }));
        }
    })
});

router.post("/staff/create", jsonParser, (req, res)=>{
    let body = req.body;
    try {
        let salt = bcrypt.genSalt(10);
        let hash = bcrypt.hashSync(body.password, salt);
        staff.createStaff(
            body.first_name, body.last_name, body.middle_name,
            body.role, hash, (err, records, fields)=>{
                if (err) {
                    res.json(baseRoute.sendError(err));
                } else {
                    console.log(records);
                    console.log(fields);
                    res.json(baseRoute.sendSuccess({message: "staff created successfully"}));
                }
            });
    } catch (exception){
        console.log(exception);
         baseRoute.sendError("registeration unsuccessful")
    }
});

router.post("/staff/delete", jsonParser, (req, res)=>{
    let body = req.body;
    staff.deleteStaff(body.id, (err, records, fields)=>{
        if (err) {
            res.json(baseRoute.sendError(err));
        } else {
            res.json(baseRoute.sendSuccess({message: `staff with id ${body.id} deleted`}));
        }
    });
});

router.post("/student/create", jsonParser, (req, res)=>{
    let body = req.body;
    student.register(body.first_name, body.last_name, body.middle_name,
        body.department, body.dom, body.part,body.reg_no,
        body.password,
        (err, result, fields)=>{
            if (err) {
                console.log(err.stack);
                res.json(baseRoute.sendError(err));
            } else {
                console.log(result);
                let data = {
                    "first_name": body.first_name,
                    "last_name": body.last_name,
                    "middle_name": body.middle_name,
                    "department": body.department,
                    "reg_no":body.reg_no
                };
                res.json(baseRoute.sendSuccess(data));
            }
        });
});
module.exports = router;
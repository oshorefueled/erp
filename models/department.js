/**
 * Created by osho on 5/22/17.
 */
var pool = require("../schemas/sqlconnect");

function createDepartment(name, HOD, callback) {
    pool.getConnection((err, connection)=>{
        if (err) console.log(`an error occured ${err}`);
        connection.query("INSERT INTO `departments` (name, HOD)" +
            "VALUES (?, ?) ",[name, HOD],
            (err, result, fields)=>{
                callback(err, result, fields);
        });
    })
}

function createDepartmentOfMajor(name, departmentId, callback) {
    pool.getConnection((err, connection)=>{
        if (err) console.log(`an error occurred ${err}`);
        connection.query("INSERT INTO `DOM` (name, departmentId) VALUES " +
            "(?, ?)", [name, departmentId],
        (err, result, fields)=>{
            callback(err, result, fields);
        });
    });
}

module.exports = {
    createDepartment: createDepartment,
    createDepartmentOfMajor: createDepartmentOfMajor
};
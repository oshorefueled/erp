/**
 * Created by osho on 5/21/17.
 */
var pool = require("../schemas/sqlconnect");

function register(
    firstname, lastname,
    middlename, departmentId,
    domId, part, regNo, password, callback){

    pool.getConnection((err, connection)=>{
        if (err) {
            console.log("an error occured");
            callback(err);
        }
        connection.query(
            'INSERT INTO `students` (firstName, lastName, middleName, regNumber,' +
            'departmentID, part, domId, password) VALUES (?,?,?,?,?,?,?,?)',
            [firstname, lastname, middlename,regNo, departmentId, part, domId, password],
            (err, result, fields)=>{
                if (err) {
                   callback(err);
                } else {
                    callback(err, result, fields);
                    console.log(`results are ${result}`);
                    console.log(`fields are ${fields}`);
                }
        });

    });
}

module.exports = {
   register : register
};
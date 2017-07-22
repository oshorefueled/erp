/**
 * Created by osho on 5/22/17.
 */
var pool = require("../schemas/sqlconnect");


/**
 *
 * @param firstname
 * @param lastname
 * @param middlename
 * @param password
 * @param role {1:HOD, 2: LECTURER, 3: SECRETARY, 4: WORKER}
 * @param callback
 *
 */
function createStaff(firstname, lastname, middlename,role, password,  callback) {
    pool.getConnection((err, connection)=>{
        if (err) console.log(`err at ${err.stack}`);
        connection.query("INSERT INTO staffs (firstName, lastName, " +
            "middleName, password, role) VALUES (?, ?, ?, ?, ?)",
            [firstname, lastname, middlename, password, role],
            (err, records, fields)=>{
                callback(err, records, fields);
            });
    });
}

function deleteStaff(id, callback) {
    pool.getConnection((err, connection)=>{
        if (err) console.log(`err at ${err.stack}`);
        connection.query("DELETE FROM `staffs` WHERE id=?", [id], (err, records, fields)=>{
            callback(err, records, fields);
        });
    });
}

function changeRole() {
    //todo
}

module.exports = {
    createStaff: createStaff,
    deletStaff: deleteStaff
};

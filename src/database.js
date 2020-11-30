const mysql = require("promise-mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "electron_db"
})

function getConnection (){
    return connection;
}

module.exports = { getConnection };
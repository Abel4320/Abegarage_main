require('dotenv').config({ path: '../../.env' });
const mysql2 = require('mysql2/promise'); // Correctly import mysql2 with Promise support

const dbConfig = {
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS, 
    database: process.env.DB_NAME,
};
//connection to the databse 

const pool= mysql2.createPool(dbConfig)
console.log('database connected successfully');

//excute the query function 
async function query (sql,parms){
    const [rows]= await pool.query(sql,parms)
    return rows
}

module.exports = {query}

require('dotenv').config({path: __dirname + '/.env'})
const Pool = require('pg').Pool;

const pool = new Pool({
    host:'localhost',
    port:'5432',
    database:'photosharingdb',
    user:process.env['DB_USER'],
    password:'photosharingdbp',
})

module.exports = pool;
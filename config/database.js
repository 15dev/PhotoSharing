//require('dotenv').config({path: __dirname + '/.env'})
const Pool = require('pg').Pool;

const pool = new Pool({
    host:process.env['DB_HOST'],
    port:process.env['DB_PORT'],
    database:process.env['DB_NAME'],
    user: process.env['DB_USER'],
    password:process.env['DB_PASSWORD'],
})

module.exports = pool;

//e83105fc-09fe-42c6-8091-619607c18185'; DELETE FROM uploads WHERE upload_id = 'e83105fc-09fe-42c6-8091-619607c18185'; --

const mssql = require('mssql')
const sqlConfig = require('./config')

async function poolPromise() {
    let pool = await mssql.connect(sqlConfig);
    if (pool.connected) {
        console.log("Database connected!")
        return pool
    }
}

module.exports = poolPromise
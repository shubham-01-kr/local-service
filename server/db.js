const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",           // apna postgres username
  password: "YOUR_PASSWORD",  // yahi password set kiya upar
  host: "localhost",
  port: 5432,
  database: "local_storage"   // apna DB
});


module.exports = pool;

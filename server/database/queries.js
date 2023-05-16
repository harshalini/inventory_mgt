const dbpool = require("../database/db")

var users_table = `CREATE TABLE users (  
    id INT AUTO_INCREMENT PRIMARY KEY,  
    name VARCHAR(100) NOT NULL,  
    email VARCHAR(50) NOT NULL UNIQUE,  
    phone VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(256) NOT NULL,
    rc_id VARCHAR(50) NOT NULL UNIQUE,
    auth_token VARCHAR(256) DEFAULT NULL UNIQUE,
    api_key VARCHAR(256) DEFAULT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`

dbpool.getConnection(async (err, connection) => {
    if (err) {
      connection.release()
      console.log('database connection failed' + err)
    } else {
      connection.query(users_table, async (error, results) => {
        if (error) {
          connection.release()
          console.log(error)
        } else {
          connection.release()
          console.log(results)
        }
      });
    }
  })
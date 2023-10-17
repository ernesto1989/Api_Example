const mysql = require('mysql2');

/**
 * Método que configura un objeto conexión y lo regresa a quien lo solicite.
 */
function getConnection(){
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tu_password_aqui",
    database: "vendedores"
  });

  return connection;
}

module.exports = {getConnection};

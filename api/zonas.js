const mysql = require("../database/db");

/**
  * Endpoint #1. Agregamos un método de GetAll
  */
function getZonas(req,res){
    console.log("REST de Zonas");
    var sql = 'SELECT * FROM zona';

    var conn = mysql.getConnection();
    conn.connect((error)=>{
        if (error) throw error;
        conn.query(sql, (error, data, fields) => {
            if (error) {
              res.status(500);
              res.send(error.message);
            } else {
              console.log(data);
              res.json({
                data,
              });
            }
            conn.end();
        });
    });
}

/**
  * Endpoint #2. Agregamos un método searchById
  */
function findById(req,res){
  console.log("Search de zonas");
  var sql = 'SELECT * FROM zona WHERE id_zona = ?';

  var id = req.body.id;

  var conn = mysql.getConnection();
  conn.connect((error)=>{
      if (error) throw error;
      var params = [id];
      conn.execute(sql, params, (error, data, fields) => {
          if (error) {
            res.status(500);
            res.send(error.message);
          } else {
            console.log(data);
            res.json({
              data,
            });
          }
          conn.end();
      });
  });
}


/**
  * Endpoint #3. Agregamos un método Insert
  */
function insertZona(req,res){
  console.log("INSERT de zonas");
  var sql = 'INSERT INTO ZONA (nombre) values (?)';

  var nombre = req.body.nombre;

  var conn = mysql.getConnection();
  conn.connect((error)=>{
      if (error) throw error;
      var params = [nombre];
      conn.execute(sql, params, (error, data, fields) => {
          if (error) {
            res.status(500);
            res.send(error.message);
          } else {
            console.log(data);
            res.json({
              status: 200,
              message: "Zona insertada",
              affectedRows: data.affectedRows,
            });
          }
          conn.end();
      });
  });
}


/**
  * Endpoint #4. Agregamos un método Update
  */
function updateZona(req,res){
  console.log("Update de zonas");
  var sql = 'UPDATE zona SET nombre = ? WHERE id_zona = ?';

  var nombre = req.body.nombre;
  var id = req.body.id;

  var conn = mysql.getConnection();
  conn.connect((error)=>{
      if (error) throw error;
      var params = [nombre,id];
      conn.execute(sql, params, (error, data, fields) => {
          if (error) {
            res.status(500);
            res.send(error.message);
          } else {
            console.log(data);
            res.json({
              status: 200,
              message: "Zona actualizada",
              affectedRows: data.affectedRows,
            });
          }
          conn.end();
      });
  });
}

/**
  * Endpoint #4. Agregamos un método delete
  */
function deleteZona(req,res){
  console.log("DELETE de zonas");
  var sql = 'DELETE FROM zona WHERE id_zona = ?';

  var id = req.body.id;

  var conn = mysql.getConnection();
  conn.connect((error)=>{
      if (error) throw error;
      var params = [id];
      conn.execute(sql, params, (error, data, fields) => {
          if (error) {
            res.status(500);
            res.send(error.message);
          } else {
            console.log(data);
            res.json({
              status: 200,
              message: "Zona borrada",
              affectedRows: data.affectedRows,
            });
          }
          conn.end();
      });
  });
}


module.exports = {getZonas, findById,insertZona,updateZona,deleteZona};

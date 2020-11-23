var connection = require("./connection.js");

//
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
	//inserts burger into table 
    insertOne: function(tableName, colName, burgerName, cb){
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, colName, burgerName], function(err, result) {
            if(err) throw err;
            cb(result); 
        });
    },
    //updates table with new burger
    updateOne: function(tableName, colName, burgerName, cb) {
        let queryString = "UPDATE ?? SET devoured = true WHERE ?? = ?";
        connection.query(queryString, [tableName, colName, burgerName], function(err, result) {
            if(err) throw err;
            cb(result);
        });       
    }
};


module.exports = orm;

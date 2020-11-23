const orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
	insertOne: function(burgerName, cb){
        orm.insertOne(burgerName, function(res){
            cb(res);
        });
    },
    updateOne: function(columnName, value, id, cb){
        orm.updateOne(columnName, value, id, function(res){
            cb(res);
        });
    }
};

module.exports = burger;

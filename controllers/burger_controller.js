//dependencies
const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

//view all burgers
router.get("/", function(req, res) {
	console.log("INSIDE SERVER LOADING")
	// express callback response by calling burger.selectAllBurger
  	burger.all(function(burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { burger_data: burgerData });
  });
});

//creates new Burger
router.post("/api/create/:newBurger", function(req, res){
    let newBurger = req.params.newBurger;

    burger.insertOne(newBurger, function(res){
        if(result.affectRows !==1){
            return res.status(404).end();
        }
        else{
            res.status(200).end();
        }
    })
});

//updates burgers
router.put("api/burgers/:burger_name", function(req, res){    
  let updateBurger = req.params.burger_name;

  burger.updateOne(updateBurger, function(res){
      if(result.changeRows !==1){
        return res.status(404).end();
      }
      else{
        res.status(200).end();
    }
  })
});

module.exports = router; 

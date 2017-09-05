var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");



// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll(req.body).then(function(results){
    var hbsObject = {
        burgers: results
    };
      res.render("index", hbsObject);
  });

});

router.post("/", function(req, res) {
    db.Burger.create(
        req.body
    ).then(function(results) {
        res.redirect("/");
    });
});


router.put("/:id", function(req, res) {
    db.Burger.update(
        req.body,
        {where: {
            id: req.params.id
        }
    }).then(function(reslults){
        res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = router;
var express = require("express");
var router = express.Router();

/* ACCUEIL*/
router.get("/", function(req, res, next) {
  res.send("This is my homepage");
});

module.exports = router;

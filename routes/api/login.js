const router = require("express").Router();
const loginController = require("../../controllers/loginController");


// Matches with "/api/residents"
router.route("/")
  .post(loginController.signIn)
  
  .post(loginController.signUp);


  module.exports = router;

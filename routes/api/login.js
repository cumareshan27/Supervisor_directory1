const router = require("express").Router();
const loginController = require("../../controllers/loginController");


// Matches with "/api/residents"
router.route("/")
  // .post(loginController.signIn)
  .post(loginController.signUp)
  .get(loginController.verify)
  .get(loginController.signIn);
 

  // If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


  module.exports = router;

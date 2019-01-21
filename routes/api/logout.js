const router = require("express").Router();
const loginController = require("../../controllers/loginController");


// Matches with "/api/residents"
router.route("/")

  .post(loginController.logout);
  // If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});


  module.exports = router;

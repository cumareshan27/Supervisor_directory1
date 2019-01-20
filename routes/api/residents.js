const router = require("express").Router();
const residentController = require("../../controllers/residentController");

// Matches with "/api/residents"
router.route("/")
  .get(residentController.findAll)
  .post(residentController.create);
  
// Matches with "/api/resident/:id"
router
  .route("/:id")
  .get(residentController.findById)
  .put(residentController.update)
  .delete(residentController.remove);

// Matches with "/api/newresidents/:id"
router
.route("/new")
.get(residentController.findByNew);


module.exports = router;

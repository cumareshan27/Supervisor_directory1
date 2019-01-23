const router = require("express").Router();
const residentController = require("../../controllers/residentController");

// Matches with "/api/profile"
router.route("/")
  .get(residentController.findByNew)
  .post(residentController.create);
  
// Matches with "/api/resident/:id"
router
  .route("/:id")
  .get(residentController.findById)
  .put(residentController.update)
  .delete(residentController.remove);


module.exports = router;
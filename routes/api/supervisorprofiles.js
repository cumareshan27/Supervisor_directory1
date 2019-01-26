const router = require("express").Router();
const supervisorController = require("../../controllers/supervisorController");

// Matches with "/api/profile"
router.route("/")
  .get(supervisorController.findByNew)
  .post(supervisorController.create);
  
// Matches with "/api/resident/:id"
router
  .route("/:id")
  .get(supervisorController.findById)
  .put(supervisorController.update)
  .delete(supervisorController.remove);


module.exports = router;
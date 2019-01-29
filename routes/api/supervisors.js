const router = require("express").Router();
const supervisorController = require("../../controllers/supervisorController");

// Matches with "/api/supervisor"
router.route("/")
  .get(supervisorController.findAll)
  .post(supervisorController.create);
  


router
  .route("/:category")
  .get(supervisorController.findByCategory)

router
.route("/:phoneNumber")
.get(supervisorController.findByphnNumber);
  
// Matches with "/api/supervisor/:id"
router
  .route("/:id")
  .get(supervisorController.findById)
  .put(supervisorController.update)
  .delete(supervisorController.remove);

// Matches with "/api/newsupervisor/:id"
router
  .route("/new")
  .get(supervisorController.findByNew);





module.exports = router;

const router = require("express").Router();
const residentsRoutes = require("./residents");
// const homeRoutes = require("./home")

// Book routes
router.use("/residents", residentsRoutes);
router.use("/residents", residentsRoutes);
router.use("/residents", residentsRoutes);

module.exports = router;

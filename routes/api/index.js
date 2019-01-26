const router = require("express").Router();
const residentsRoutes = require("./residents");
const profileRoutes = require("./profile");
const loginRoutes = require("./login");
const signUpRoutes = require("./signup");
const verifyRoutes = require("./verify");
const logoutRoutes = require("./logout");
const supervisorRoutes = require("./supervisors");
const supervisorProfileRoutes = require("./supervisorprofiles");
// const signinRoutes = require("/signin");
//const loginController = require("../../controllers/loginController");
//const singupRoutes = require("./signup");
// const homeRoutes = require("./home")

// Book routes
router.use("/residents", residentsRoutes);
router.use("/supervisors", supervisorRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signUpRoutes);
router.use("/verify", verifyRoutes);
router.use("/logout", logoutRoutes);
router.use("/profile", profileRoutes);
router.use("/supervisorprofile",supervisorProfileRoutes)
// router.use("/signin", signinRoutes);




// API Routes
// Matches with "/api/signup"
// router
//   .route("/api/signup")
//   .post(loginController.signUp);


// // Matches with "/api/signin"
// router
//   .route("/api/signin")
//   .post(loginController.signIn);


// // Matches with "/api/verify"
// router
//   .route("/api/verify")
//   .post(loginController.verify);


// // Matches with "/api/logout"
// router
//   .route("/api/logout")
//   .post(loginController.logout);


// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


module.exports = router;

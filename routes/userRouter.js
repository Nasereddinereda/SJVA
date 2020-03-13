const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const auth = require("../midlleware/auth");
const router = express.Router();

router.route("/").get(userController.getallusers);
router.route("/auth").get(auth,authController.auth);
router.route("/:id").get(userController.getuser);
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/logout").get(authController.logout);
router.patch(
    "/updateMe",
    authController.protect,
    // authController.uploadphoto,
    // authController.resizeUserPhoto,
    userController.updateme
);
// router.delete("/deleteMe", authController.protect, userController.deleteme);
router.patch(
    "/updatePassword",
    authController.protect,
    authController.updatePassword
);

module.exports = router;
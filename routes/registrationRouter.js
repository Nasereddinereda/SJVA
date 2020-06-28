const express = require("express");
const registrationController = require("../controllers/registrationController");
const router = express.Router();

router.route("/").get(registrationController.getAllRegistrations);
router.route("/").post(registrationController.createRegistration);
router.route("/:id").get(registrationController.getRegistration);
router.route("/:id").delete(registrationController.deleteRegistration);
router.route("/:id").patch(registrationController.updateRegistration);

module.exports = router;

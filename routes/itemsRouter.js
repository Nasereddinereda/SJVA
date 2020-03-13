const express = require("express");
const authController = require("../controllers/authController");
const itemsController = require("../controllers/itemsController");
const Commentary = require("./../controllers/commentaryController");
const Registration = require("./../controllers/registrationController");

const router = express.Router();
// router.use(authController.protect);

router
    .route("/")
    .get(itemsController.getAllItems)
    .post(
     itemsController.createItem
    );

router
    .route("/:id")
    .get(itemsController.getItem)
    .patch(authController.protect, itemsController.updateItem)
    .delete(authController.protect, itemsController.deleteItem);

router
    .route("/:itemId/commentary")
    .post(Commentary.setproductuserids, Commentary.createCommentary);

router
    .route("/:eventId/registration")
    .post(Registration.setproductuserids, Registration.createRegistration);

module.exports = router;
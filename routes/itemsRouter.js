const express = require("express");
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
.route("/upload")
    .post(itemsController.fileUploaded );

router
    .route("/:id")
    .get(itemsController.getItem)
    .patch(itemsController.updateItem)
    .delete(itemsController.deleteItem);

router
    .route("/:itemId/commentary")
    .post(Commentary.setproductuserids, Commentary.createCommentary);

router
    .route("/:eventId/registration")
    .post(Registration.setproductuserids, Registration.createRegistration);

module.exports = router;
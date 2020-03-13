const Registration = require("./../models/registrationModel");
const factory = require("./handleFactory");

exports.getAllRegistrations = factory.getAll(Registration);

exports.getRegistration = factory.getOne(Registration);

exports.createRegistration = factory.createOne(Registration);

exports.updateRegistration = factory.updateOne(Registration);

exports.deleteRegistration = factory.deleteOne(Registration);

exports.setproductuserids = (req, res, next) => {
    if (!req.body.event) req.body.event = req.params.eventId;
    next();
};
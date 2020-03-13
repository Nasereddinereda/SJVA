const Commentary = require("./../models/commentaryModel");
const factory = require("./handleFactory");

exports.getAllCommentary = factory.getAll(Commentary);

exports.getCommentary = factory.getOne(Commentary);

exports.createCommentary = factory.createOne(Commentary);

exports.updateCommentary = factory.updateOne(Commentary);

exports.deleteCommentary = factory.deleteOne(Commentary, "review");

exports.setproductuserids = (req, res, next) => {
  if (!req.body.item) req.body.item = req.params.itemId;
  next();
};
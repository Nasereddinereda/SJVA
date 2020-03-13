const Items = require("./../models/itemsModel");
const factory = require("./handleFactory");

exports.getAllItems = factory.getAll(Items);

exports.getItem = factory.getOne(Items);

exports.createItem = factory.createOne(Items);

exports.updateItem = factory.updateOne(Items);

exports.deleteItem = factory.deleteOne(Items);
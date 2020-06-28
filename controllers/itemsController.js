const Items = require("./../models/itemsModel");
const factory = require("./handleFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");





exports.getAllItems = factory.getAll(Items);

exports.getItem = factory.getOne(Items);

exports.createItem = factory.createOne(Items);

exports.updateItem = factory.updateOne(Items);

exports.deleteItem = factory.deleteOne(Items);

exports.fileUploaded = catchAsync(async (req, res, next) => { 

    
    if(req.files === null){
        return next(new AppError("No document Uploaded", 404));
    }
    
    
    try{
        let i = 0 ; 
        req.files.file.forEach(file => {
            file.mv(`images/${req.body.name[i]}`, err => {
                if (err) {
                    console.log(err);
                    return next(new AppError("No document Uploaded", 502));
                }
            });
            i++ ; 
        });
    }catch {
        
        req.files.file.mv(`images/${req.body.name}`, err => {
                if (err) {
                    console.log(err);
                    return next(new AppError("No document Uploaded", 502));
                }
            });
        
    }

    
    res.json(req.files);
    // res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
} );
const User = require("../models/userModel");
const factory = require("./handleFactory");
// const catchAsync = require("../utils/catchAsync");

exports.getallusers = factory.getAll(User);
exports.getuser = factory.getOne(User);
exports.updateme = factory.updateOne(User);




// UPDATE ME
// exports.updateme = factory.updateOne(User);
// exports.updateme = catchAsync(async (req, res, next) => {
//   // // 1) Create error if user POSTs password data
//   // if (req.body.password || req.body.passwordConfirm) {
//   //   return next(
//   //     new AppError(
//   //       "This route is not for password updates. Please use /updateMyPassword.",
//   //       400
//   //     )
//   //   );
//   // }

//   // 2) Filtered out unwanted fields names that are not allowed to be updated
//   // const filteredBody = filterObj(req.body, "name", "email");

//   if (req.file) req.body.image = req.file.filename;

//   // 3) Update user document
//   const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, {
//     new: true,
//     runValidators: true
//   });

//   res.status(200).json({
//     status: "success",
//     data: {
//       user: updatedUser
//     }
//   });
// });
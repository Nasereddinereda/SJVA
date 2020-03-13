const express = require("express");
const globalerror = require("./controllers/errorController");
const registrationRouter = require("./routes/registrationRouter");
const userRouter = require("./routes/userRouter");
const itemRouter = require("./routes/itemsRouter");
const commentaryRouter = require("./routes/commentaryRouter");

const app = express();

//Limit Data Body
app.use(
    express.json({
        limit: "10kb"
    })
);

//Route
app.use("/api/v0/registration", registrationRouter);
app.use("/api/v0/users", userRouter);
app.use("/api/v0/items", itemRouter);
app.use("/api/v0/commentary", commentaryRouter);

// Global Error
app.use(globalerror);
module.exports = app;
const app = require("./app");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env"
});

// conenct DB
connectDB();

const PORT = process.env.PORT || 5000;

// conect Server
app.listen(PORT, () => console.log(`server started on port ${PORT} .`));

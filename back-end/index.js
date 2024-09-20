const dotenv = require("dotenv");

const connectDB = require("./db/index.js");
// const bodyParser = require('bodyParser');

const { app } = require("./app.js");
require("./utils/customConsole.js");

dotenv.config({
  path: "./.env",
});


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.dev(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.dev(`mongoDb connection failed : ${err}`);
  });

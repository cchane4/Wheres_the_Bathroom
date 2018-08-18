const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const expressHandlebars = require('express-handlebars');



let PORT = process.env.PORT || 3000;

const app = express();

const router = express.Router();

require("./config/routes")(router);

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));

app.set('view engine', "handlebars");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);


let db = process.env.MONGODB_URI || "mongodb://heroku_lqxq33jc:8e4bj53lsgmdai9tmb26g0k1ao@ds125831.mlab.com:25831/heroku_lqxq33jc";

mongoose.connect(db, (error) => {
  if (error) {
    console.log(error);
  }
  else{
    console.log("mongoose connection is successful");
  }
});

app.listen(PORT, () => {
  console.log("listening on port:" + PORT);
});
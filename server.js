let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let express = require('express');
let expressHandlebars = require('express-handlebars');



let PORT = process.env.PORT || 3000;

let app = express();

let router = express.Router();



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

mongoose.connect(db, function(error){
  if (error) {
    console.log(error);
  }
  else{
    console.log("mongoose connection is successful");
  }
});

app.listen(PORT, function(){
  console.log("listening on port:" + PORT);
});
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require('passport');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
app.use(passport.initialize());

const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);
//const authCheckMiddleware = require('./middleware/auth-check');
// app.use('/api', authCheckMiddleware);

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
var databaseUri = "mongodb://localhost/irl";

if (process.env.MONGODB_URI) {
  //this executes if this is being executed in your heroku app
  mongoose.connect(process.env.MONGODB_URI);
} else {
  //this executes if this is being executed on your local machine
  mongoose.connect(databaseUri);
}

var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log("Mongoose Connection successful");
})
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/irl",
//   {
//     useMongoClient: true
//   }
// );

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

const express = require("express"); // backend Framework
const dotenv = require("dotenv"); // has our config varabiles
const morgan = require("morgan"); // morgan for login//shows any request to the page in the console
const path = require("path");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const connectDB = require(".\\config\\db.js");

//load config file
dotenv.config({
	path: "C:\\Users\\eng-m\\Desktop\\NodoJs\\Project\\storybook\\config\\config.env",
});

//passport configure
require(".\\config\\passport")(passport);

// import our DB file

connectDB();

// init our app
const app = express();

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//logging using mmorgan dev package
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev")); // telling our appobject to use the morgan middle layer for consle logging
}

// Handlebars
const { formatDate, truncate,  stripTags} = require("./helpers/hbs");

//handlers
// setting handle bar our templating engine and define a shorter file extension
app.engine(
	".hbs",
	exphbs.engine({
		helpers: { formatDate, truncate, stripTags },
		defaultLayout: "main",
		extname: ".hbs",
	})
);
app.set("view engine", ".hbs");

//Express-session middleware setting
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
	})
);
console.log("Express-session middleware setting");

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

console.log("Passport Middleware");

//static folder
//define a static folder to be use by the app object when static data like images, emojis, etc.../ style css/ frontend java script
//app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/", require(".\\routes\\index"));
app.use("/auth", require(".\\routes\\auth"));
app.use("/stories", require(".\\routes\\stories"));

//process.evn.PORT => to use any PORT variable in the config.env file other wise use the port xxxxx
const PORT = process.env.PORT || 3000;

console.log(process.env.PORT);

//listen to request  on the definded port
app.listen(
	PORT,
	console.log(
		`Server running in process ${process.env.NODE_ENV} in mode on port ${PORT}`
	)
);

// The idea of the start point file is that we define a listener that keeps listen to an event on the defined PORT in the config.env configuration file
// import our packages
//define path to the config file using dotenv
//inti our app -> const app = express(); as express server create an express object
// init our port by the one defined in the config file if nothing there use port = xxxx
// const PORT = process.env.PORT || 5000;
// let our app object listen on the confiured port
//app.listen(
/* 	PORT,
	console.log(
		`Server running in process ${process.env.NODE_ENV} in mode on port ${PORT}`
	)
);
 */

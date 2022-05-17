// for home high level pages homepage or dashboard
const express = require("express");
const res = require("express/lib/response");
const { ensureGuest, ensureAuth } = require("../middleware/auth");
const router = express.Router();
const User = require("../models/User");
const Story =  require("../models/Story");

//@desc login/landing page

//@route GET /
router.get("/", ensureGuest, (req, res) => {
	console.log("Homepage request" + req.user);
	res.render("login", { layout: "login" });
});

//@desc Dashboard page
//@route GET /dashboard
//@route GET /
router.get("/dashboard", ensureAuth, async (req, res) => {
  try {
    // lean is used to handle the form data 
    const stories = await Story.find({user: req.user.id}).lean()
    res.render("dashboard", { name: req.user.firstName,
      stories
     });
  } catch (error) {
    console.log(error)
  }

});

module.exports = router;

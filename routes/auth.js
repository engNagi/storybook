// for home high level pages homepage or dashboard
const express = require("express");
const passport = require("passport");
const router = express.Router();

console.log("Auth accessed")
//@desc login/Google Authenticate
//@route GET /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//@desc Google Auth callback
//@route GET /Auth/google/callback
router.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/" }),
	(req, res) => {
		res.redirect("/dashboard");
	}
);

module.exports = router;

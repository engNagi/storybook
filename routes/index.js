// for home high level pages homepage or dashboard
const express = require("express")
const res = require("express/lib/response")
const { ensureGuest, ensureAuth } = require("../middleware/auth")
const User = require("../models/User")
const router = express.Router()


//@desc login/landing page

//@route GET /
router.get("/", ensureGuest, (req, res) =>{
  console.log(req.user)
  res.render("login", {layout : "login"})
})


//@desc Dashboard page
//@route GET /dashboard
//@route GET /
router.get("/dashboard", ensureAuth, (req, res) =>{
  console.log(req.user)
  res.render("dashboard")
})







module.exports = router
// for home high level pages homepage or dashboard
const express = require("express")
const res = require("express/lib/response")
const router = express.Router()


//@desc login/landing page

//@route GET /
router.get("/", (req, res) =>{
  res.render("login", {layout : "login"})
})


//@desc Dashboard page
//@route GET /dashboard
//@route GET /
router.get("/dashboard", (req, res) =>{
  res.render("dashboard")
})







module.exports = router
// middleware function that has access to req and response to if the user is already authenticated do what ever next, 
// else redirect to homepage. second function to check if the user is already a guest but not logged in send them to the dashboard directly

module.exports = {
	ensureAuth: function (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect("/");
		}
	},
	ensureGuest: function (req, res, next) {
		if (req.isAuthenticated()) {
			res.redirect("/dashboard");
		} else {
			return next();
		}
	},
};

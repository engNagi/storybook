const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
    trim: true
	},
	body: {
		type: String,
		required: true,
	},
	status: {
		type: String,
    default: "public",
    enum: ["public", "private"],
	},
  //user Object inside the Story object -> in other words each story object contains user object that created it
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});


module.exports = mongoose.model("Story", StorySchema)
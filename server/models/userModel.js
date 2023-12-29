const mongoose = require("mongoose");

// Declare user schema
const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		mobile: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
		refreshToken: {
			type: String,
		},
		passwordChangedAt: Date,
		passwordResetToken: String,
		passwordResetExpires: Date,
	},
	{
		timestamps: true,
	}
);

// Declare user model
const User = new mongoose.model("user", userSchema);

module.exports = { User };

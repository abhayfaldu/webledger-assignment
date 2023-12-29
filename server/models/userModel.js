const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

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

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) next();

	const salt = await bcrypt.genSaltSync(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

// Declare user model
const User = new mongoose.model("user", userSchema);

module.exports = { User };

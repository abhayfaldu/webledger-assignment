const { User } = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { validateMongodbId } = require("../utils/validateMongoDbId");

// Save recipe controller
const handleSaveRecipe = asyncHandler(async (req, res) => {
	const { _id } = req.user;
	validateMongodbId(_id);
	const { recipeId } = req.body;

	try {
		const user = await User.findById(_id);
		const alreadySaved = user.savedRecipes.find(
			(id) => id.toString() === recipeId.toString()
		);

		if (alreadySaved) {
			const user = await User.findByIdAndUpdate(
				_id,
				{ $pull: { savedRecipes: recipeId } }, // Remove recipe from savedRecipes
				{ new: true }
			);
			res.json(user);
		} else {
			const user = await User.findByIdAndUpdate(
				_id,
				{ $push: { savedRecipes: recipeId } }, // Add recipe to savedRecipes
				{ new: true }
			);
			res.json(user);
		}
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = { handleSaveRecipe };

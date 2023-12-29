const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

// Save recipe controller
const handleSaveRecipe = asyncHandler(async (req, res) => {
	const { userId } = req.user;
	const { recipeId } = req.body;

	try {
		const user = await User.findById(userId);
		const alreadySaved = user.savedRecipes.find(
			(id) => id.toString() === recipeId
		);

		if (alreadySaved) {
			const user = await User.findByIdAndUpdate(
				userId,
				{ $pull: { savedRecipes: recipeId } }, // Remove recipe from savedRecipes
				{ new: true }
			);
			res.json(user);
		} else {
			const user = await User.findByIdAndUpdate(
				userId,
				{ $push: { savedRecipes: recipeId } }, // Add recipe to savedRecipes
				{ new: true }
			);
			res.json(user);
		}
	} catch (error) {
		res.status(401).send({ message: error.message });
		throw new Error(error);
	}
});

module.exports = { handleSaveRecipe };

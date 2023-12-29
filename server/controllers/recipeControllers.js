const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { validateMongodbId } = require("../utils/validateMongoDbId");

// Save recipe controller
const handleSaveRecipe = asyncHandler(async (req, res) => {
	const { userId } = req.user;
	validateMongodbId(userId);
	const { recipeId } = req.body;
	console.log(req);

	// try {
	// 	const user = await User.findById(userId);
	// 	const alreadySaved = user.savedRecipes.find(
	// 		(id) => id.toString() === recipeId
	// 	);

	// 	if (alreadySaved) {
	// 		const user = await User.findByIdAndUpdate(
	// 			userId,
	// 			{ $pull: { savedRecipes: recipeId } }, // Remove recipe from savedRecipes
	// 			{ new: true }
	// 		);
	// 		res.json(user);
	// 	} else {
	// 		const user = await User.findByIdAndUpdate(
	// 			userId,
	// 			{ $push: { savedRecipes: recipeId } }, // Add recipe to savedRecipes
	// 			{ new: true }
	// 		);
	// 		res.json(user);
	// 	}
	// } catch (error) {
	// 	throw new Error(error);
	// }
});

module.exports = { handleSaveRecipe };

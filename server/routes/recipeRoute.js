const express = require("express");
const { handleSaveRecipe } = require("../controllers/recipeControllers");
const router = express.Router();

router.post("/save", handleSaveRecipe);

module.exports = { router };

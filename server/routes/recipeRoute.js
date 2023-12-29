const express = require("express");
const { handleSaveRecipe } = require("../controllers/recipeControllers");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/save", authMiddleware, handleSaveRecipe);

module.exports = { router };

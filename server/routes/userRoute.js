const express = require("express");
const router = express.Router();
const {
	handleRegister,
	handleLogin,
	handleGetAllSavedRecipes,
} = require("../controllers/userControllers");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.get("/wishlist", authMiddleware, handleGetAllSavedRecipes);

module.exports = { router };

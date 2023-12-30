const { User } = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
	if (req?.headers?.authorization?.startsWith("Bearer")) {
		try {
			let token = req?.headers?.authorization?.split(" ")[1];
			if (token) {
				const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
				const user = await User.findById(decoded?.id);
				req.user = user;
				next();
			} else {
				throw new Error("token not found in try block");
			}
		} catch (error) {
			console.log(error);
			throw new Error("Not Authorized token Expired, Please login again");
		}
	} else {
		throw new Error("There is no token attached to header");
	}
});

module.exports = { authMiddleware };

const jwt = require("jsonwebtoken");

const generateJWTToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
};

module.exports = { generateJWTToken };

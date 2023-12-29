const { User } = require("../models/userModel");
const { generateRefreshToken } = require("../config/refreshToken");
const { generateJWTToken } = require("../config/jwtToken");

// User Register Controller
const handleRegister = async (req, res) => {
	const email = req.body.email;
	const userByEmail = await User.findOne({ email });

	if (!userByEmail) {
		const newUser = await User.create(req.body);
		res
			.status(200)
			.send({ message: "User registered successfully", user: newUser });
	} else {
		res.status(409).send({ message: "User already exits, Please Login." });
	}
};

// User Login Controller
const handleLogin = async (req, res) => {
	const { email, password } = req.body;
	const userByEmail = await User.findOne({ email });

	if (userByEmail && (await userByEmail.isPasswordMatched(password))) {
		// Generate and assign refreshToken
		const id = userByEmail?._id;
		const refreshToken = await generateRefreshToken(id);
		await User.findByIdAndUpdate(id, { refreshToken }, { new: true });

		// Store refreshToken in cookies
		const maxAge = 3 * 24 * 60 * 60 * 1000; // 3 days in ms
		res.cookie("refreshToken", refreshToken, { httpOnly: true, maxAge });

		res.json({
			_id: userByEmail?._id,
			firstName: userByEmail?.firstName,
			lastName: userByEmail?.lastName,
			email: userByEmail?.email,
			mobile: userByEmail?.mobile,
			token: generateJWTToken(userByEmail?._id), // JWT token for user auth
		});
	} else {
		res.status(401).send({ message: "User not found, Please Register." });
	}
};

module.exports = { handleRegister, handleLogin };

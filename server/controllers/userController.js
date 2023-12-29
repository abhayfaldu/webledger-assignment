const { User } = require("../models/userModel");

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

	if (userByEmail && (await userByEmail.isPasswordMatch(password))) {
		// Generate and assign refreshToken
		const id = userByEmail?._id;
		const refreshToken = userByEmail.generateRefreshToken(id);
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
			token: generateToken(userByEmail?._id),
		});
	} else {
		res.status(401).send({ message: "User not found, Please Register." });
	}
};

module.exports = { handleRegister, handleLogin };

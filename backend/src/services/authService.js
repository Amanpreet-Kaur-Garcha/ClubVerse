const bcrypt = require("bcrypt");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const registerService = async (userData) => {
	const { name, email, password, role } = userData;

	const existingUser = await User.findOne({ email });

	if (existingUser) {
		throw new Error("Email already registered");
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const user = await User.create({
		name,
		email,
		password: hashedPassword,
		role: role || "student",
	});

	const token = generateToken(user._id);

	return {
		token,
		user: {
			id: user._id,
			name: user.name,
			email: user.email,
			role: user.role,
		},
	};
};

const loginService = async (userData) => {
	const { email, password } = userData;

	const user = await User.findOne({ email });

	if (!user) {
		throw new Error("Invalid email or password");
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		throw new Error("Invalid email or password");
	}

	const token = generateToken(user._id);

	return {
		token,
		user: {
			id: user._id,
			name: user.name,
			email: user.email,
			role: user.role,
		},
	};
};

module.exports = {
	registerService,
	loginService,
};

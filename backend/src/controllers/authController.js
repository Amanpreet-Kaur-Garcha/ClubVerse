const { registerSchema, loginSchema } = require("../validators/authValidation");
const { registerService, loginService } = require("../services/authService");

const registerUser = async (req, res) => {
	try {
		const validatedData = registerSchema.parse(req.body);

		const result = await registerService(validatedData);

		// Set JWT in HTTP-only cookie
		res.cookie("token", result.token, {
			httpOnly: true,
			secure: false,
			sameSite: "lax",
			maxAge: 7 * 24 * 60 * 60 * 1000,
		});

		res.status(201).json({
			success: true,
			message: "Registration Successful",
			user: result.user,
		});
	} catch (error) {
		if (error.name === "ZodError") {
			return res.status(400).json({
				success: false,
				errors: error.issues,
			});
		}

		res.status(400).json({
			success: false,
			message: error.message,
		});
	}
};

const loginUser = async (req, res) => {
	try {
		const validatedData = loginSchema.parse(req.body);

		const result = await loginService(validatedData);

		// Set JWT in HTTP-only cookie
		res.cookie("token", result.token, {
			httpOnly: true,
			secure: false, // true after deployment with HTTPS
			sameSite: "lax",
			maxAge: 7 * 24 * 60 * 60 * 1000,
		});

		res.status(200).json({
			success: true,
			message: "Login Successful",
			user: result.user,
		});
	} catch (error) {
		if (error.name === "ZodError") {
			return res.status(400).json({
				success: false,
				errors: error.issues,
			});
		}

		res.status(400).json({
			success: false,
			message: error.message,
		});
	}
};

const getProfile = async (req, res) => {
	res.status(200).json({
		success: true,
		user: req.user,
	});
};

const logoutUser = async (req, res) => {
	res.clearCookie("token", {
		httpOnly: true,
		sameSite: "lax",
		secure: false, // change to true when using HTTPS in production
	});

	res.status(200).json({
		success: true,
		message: "Logged out successfully",
	});
};

module.exports = {
	registerUser,
	loginUser,
	getProfile,
	logoutUser,
};

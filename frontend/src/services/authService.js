import api from "./axiosInstance";

export const registerUser = async (data) => {
	const res = await api.post("/auth/register", data);
	return res.data;
};

export const loginUser = async (data) => {
	const res = await api.post("/auth/login", data);
	return res.data;
};

export const getProfile = async () => {
	const res = await api.get("/auth/profile");
	return res.data;
};

export const logoutUser = async () => {
	const res = await api.post("/auth/logout");
	return res.data;
};

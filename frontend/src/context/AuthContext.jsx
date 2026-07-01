import {
	createContext,
	useContext,
	useEffect,
	useState,
	useCallback,
} from "react";

import {
	loginUser,
	registerUser,
	getProfile,
	logoutUser,
} from "../services/authService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const checkUser = useCallback(async () => {
		try {
			const res = await getProfile();
			setUser(res.user);
		} catch {
			setUser(null);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		checkUser();
	}, [checkUser]);

	const login = async (data) => {
		const res = await loginUser(data);
		setUser(res.user);
		return res;
	};

	const register = async (data) => {
		const res = await registerUser(data);
		setUser(res.user);
		return res;
	};

	const logout = async () => {
		await logoutUser();
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				login,
				register,
				logout,
				checkUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);

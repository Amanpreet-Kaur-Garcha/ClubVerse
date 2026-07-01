import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import StudentDashboard from "../pages/student/Dashboard";
import CoordinatorDashboard from "../pages/coordinator/Dashboard";
import AdminDashboard from "../pages/admin/Dashboard";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/login" replace />} />

				<Route path="/login" element={<Login />} />

				<Route path="/register" element={<Register />} />

				<Route
					path="/student/dashboard"
					element={
						<ProtectedRoute>
							<StudentDashboard />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/coordinator/dashboard"
					element={
						<ProtectedRoute>
							<CoordinatorDashboard />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/admin/dashboard"
					element={
						<ProtectedRoute>
							<AdminDashboard />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;

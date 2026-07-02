import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import ProtectedRoute from "../routes/ProtectedRoute";

// Auth Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// Public Pages
import Home from "../pages/Home";
import Clubs from "../pages/Clubs";
import Events from "../pages/Events";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

// Dashboards
import StudentDashboard from "../pages/student/Dashboard";
import CoordinatorDashboard from "../pages/coordinator/Dashboard";
import AdminDashboard from "../pages/admin/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />

                <main className="flex-1">
                  <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="clubs" element={<Clubs />} />
                    <Route path="events" element={<Events />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="settings" element={<Settings />} />

                    <Route
                      path="student/dashboard"
                      element={<StudentDashboard />}
                    />

                    <Route
                      path="coordinator/dashboard"
                      element={<CoordinatorDashboard />}
                    />

                    <Route
                      path="admin/dashboard"
                      element={<AdminDashboard />}
                    />
                  </Routes>
                </main>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
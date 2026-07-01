import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/layout/Sidebar";

import Home from "./pages/Home";
import Clubs from "./pages/Clubs";
import Events from "./pages/Events";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import CoordinatorDashboard from "./pages/CoordinatorDashboard";

function App() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/coordinator" element={<CoordinatorDashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
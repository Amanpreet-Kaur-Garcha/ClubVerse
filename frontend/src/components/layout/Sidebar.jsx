import {
  Home,
  Users,
  Calendar,
  Megaphone,
  BarChart3,
  Settings,
  CircleHelp,
  LogOut,
  Plus,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    icon: Home,
    path: "/",
  },
  {
    name: "Clubs",
    icon: Users,
    path: "/clubs",
  },
  {
    name: "Events",
    icon: Calendar,
    path: "/events",
  },
  {
    name: "Announcements",
    icon: Megaphone,
    path: "/announcements",
  },
  {
    name: "Reports",
    icon: BarChart3,
    path: "/reports",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-white border-r flex flex-col justify-between">

      {/* Logo */}
      <div>

        <div className="px-6 py-8 border-b">
          <h1 className="text-4xl font-extrabold text-indigo-700">
            ClubVerse
          </h1>

          <p className="text-gray-500 text-sm mt-1 tracking-wide">
            Campus Management
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-5">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-6 py-4 transition-all
                  ${
                    isActive
                      ? "bg-indigo-100 border-l-4 border-indigo-700 text-indigo-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <Icon size={22} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}

        </nav>
      </div>

      {/* Bottom */}
      <div>

        <div className="px-4">
          <button className="w-full bg-indigo-700 hover:bg-indigo-800 text-white rounded-xl py-4 flex justify-center items-center gap-2 shadow-lg">
            <Plus size={20} />
            Create New Event
          </button>
        </div>

        <div className="mt-8 border-t">

          <NavLink
            to="/help"
            className="flex items-center gap-4 px-6 py-4 hover:bg-gray-100 text-gray-700"
          >
            <CircleHelp size={20} />
            Help Center
          </NavLink>

          <NavLink
            to="/logout"
            className="flex items-center gap-4 px-6 py-4 hover:bg-gray-100 text-gray-700"
          >
            <LogOut size={20} />
            Logout
          </NavLink>

        </div>

      </div>

    </aside>
  );
}
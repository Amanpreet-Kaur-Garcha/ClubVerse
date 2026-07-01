import {
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-8">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-indigo-700">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your clubs and events efficiently.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="pl-11 pr-4 py-3 w-80 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Notification */}
        <button className="relative p-3 rounded-full hover:bg-gray-100">
          <Bell size={22} />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3 cursor-pointer">

          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="User"
            className="w-11 h-11 rounded-full"
          />

          <div>
            <h3 className="font-semibold">Krish Batra</h3>
            <p className="text-sm text-gray-500">Student</p>
          </div>

          <ChevronDown size={18} />
        </div>

      </div>

    </header>
  );
}
import { MapPin, Users, CalendarDays } from "lucide-react";

export default function EventCard({ event }) {
  const formattedDate = new Date(event.date).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <div className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition duration-300">

      {/* Event Image */}
      <img
        src={
          event.image ||
          "https://placehold.co/600x400/e0e7ff/4338ca?text=ClubVerse+Event"
        }
        alt={event.title}
        className="h-60 w-full object-cover"
        onError={(e) => {
          e.target.src =
            "https://placehold.co/600x400/e0e7ff/4338ca?text=ClubVerse+Event";
        }}
      />

      <div className="p-5">

        {/* Date */}
        <div className="flex items-center gap-2 text-indigo-600 text-sm font-semibold">
          <CalendarDays size={16} />
          <span>{formattedDate}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mt-3">
          {event.title}
        </h2>

        {/* Venue */}
        <div className="flex items-center gap-2 mt-4 text-gray-500">
          <MapPin size={18} />
          <span>{event.venue}</span>
        </div>

        {/* Category & Attendees */}
        <div className="flex justify-between items-center mt-4">

          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
            {event.category}
          </span>

          <span className="flex items-center gap-2 text-gray-500">
            <Users size={18} />
            {event.attendees ?? 0}
          </span>

        </div>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-6">

          <h3 className="font-bold text-indigo-600 text-lg">
            {Number(event.price) === 0
              ? "FREE"
              : `₹${event.price}`}
          </h3>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition">
            {Number(event.price) === 0
              ? "Register"
              : "Book Ticket"}
          </button>

        </div>

      </div>
    </div>
  );
}
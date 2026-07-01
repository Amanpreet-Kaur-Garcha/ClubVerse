import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import EventsGrid from "../components/events/EventsGrid";
import EventFilters from "../components/events/EventFilters";

export default function Events() {
  const [events, setEvents] = useState([]);

  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");

  useEffect(() => {
    const storedEvents =
      JSON.parse(localStorage.getItem("events")) || [];

    setEvents(storedEvents);
  }, []);

  const filteredEvents = events.filter((event) => {
    const categoryMatch =
      category === "All" || event.category === category;

    const priceMatch =
      price === "All" ||
      (price === "Free" && Number(event.price) === 0) ||
      (price === "Paid" && Number(event.price) > 0);

    return categoryMatch && priceMatch;
  });

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto py-10 px-6">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            Events
          </h1>

          <EventFilters
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
          />

        </div>

        {filteredEvents.length > 0 ? (
          <EventsGrid events={filteredEvents} />
        ) : (
          <div className="bg-white rounded-2xl shadow p-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-600">
              No Events Found
            </h2>

            <p className="text-gray-500 mt-2">
              Try changing the filters or create a new event.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
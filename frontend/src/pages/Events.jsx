import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import EventsGrid from "../components/events/EventsGrid";
import EventFilters from "../components/events/EventFilters";

import { getEvents } from "../api/eventApi";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const data = await getEvents();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
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

        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">

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

        {loading ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-500">
              Loading Events...
            </h2>
          </div>
        ) : filteredEvents.length > 0 ? (
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
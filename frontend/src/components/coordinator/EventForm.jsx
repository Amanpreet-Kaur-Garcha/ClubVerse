import { useState, useEffect } from "react";
import { getEvents, saveEvents } from "../../utils/storage";

export default function EventForm({ onAdd, editingEvent }) {
  const [event, setEvent] = useState({
    title: "",
    category: "",
    venue: "",
    date: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (editingEvent) {
      setEvent(editingEvent);
    } else {
      setEvent({
        title: "",
        category: "",
        venue: "",
        date: "",
        price: "",
        image: "",
      });
    }
  }, [editingEvent]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !event.title ||
      !event.category ||
      !event.venue ||
      !event.date
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const events = getEvents();

    if (editingEvent) {
      const updatedEvents = events.map((item) =>
        item.id === editingEvent.id ? event : item
      );

      saveEvents(updatedEvents);
    } else {
      const newEvent = {
        ...event,
        id: Date.now(),
        attendees: 0,
      };

      saveEvents([...events, newEvent]);
    }

    setEvent({
      title: "",
      category: "",
      venue: "",
      date: "",
      price: "",
      image: "",
    });

    onAdd();
  };

  return (
    <div className="bg-white rounded-2xl shadow p-8">
      <h2 className="text-2xl font-bold mb-6">
        {editingEvent ? "Edit Event" : "Add New Event"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            name="title"
            value={event.title}
            onChange={handleChange}
            placeholder="Event Title"
            className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="category"
            value={event.category}
            onChange={handleChange}
            placeholder="Category"
            className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="venue"
            value={event.venue}
            onChange={handleChange}
            placeholder="Venue"
            className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="number"
            name="price"
            value={event.price}
            onChange={handleChange}
            placeholder="Price (0 for Free)"
            className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="url"
            name="image"
            value={event.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Live Image Preview */}

          <div className="md:col-span-2">
            {event.image ? (
              <img
                src={event.image}
                alt="Preview"
                className="w-full h-64 object-cover rounded-xl border"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/800x400/e5e7eb/6b7280?text=Invalid+Image+URL";
                }}
              />
            ) : (
              <div className="w-full h-64 border-2 border-dashed rounded-xl flex items-center justify-center text-gray-400">
                Image Preview
              </div>
            )}
          </div>

        </div>

        <button
          type="submit"
          className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl transition"
        >
          {editingEvent ? "Update Event" : "Add Event"}
        </button>
      </form>
    </div>
  );
}
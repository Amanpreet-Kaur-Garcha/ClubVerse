import { useState, useEffect } from "react";
import { createEvent, updateEvent } from "../../api/eventApi";

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
      setEvent({
        title: editingEvent.title || "",
        category: editingEvent.category || "",
        venue: editingEvent.venue || "",
        date: editingEvent.date
          ? editingEvent.date.split("T")[0]
          : "",
        price: editingEvent.price || "",
        image: editingEvent.image || "",
      });
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

  const handleSubmit = async (e) => {
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

    try {
      const payload = {
        ...event,
        price: Number(event.price) || 0,
      };

      if (editingEvent) {
        await updateEvent(editingEvent._id, payload);
      } else {
        await createEvent(payload);
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
    } catch (error) {
      console.error(error);
      alert("Failed to save event.");
    }
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
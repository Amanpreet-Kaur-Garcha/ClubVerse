import { Pencil, Trash2 } from "lucide-react";
import { deleteEvent } from "../../api/eventApi";

export default function EventList({
  events,
  onDelete,
  onEdit,
}) {

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) return;

    try {
      await deleteEvent(id);
      onDelete();
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete event.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow p-8">

      <h2 className="text-2xl font-bold mb-6">
        My Events
      </h2>

      {events.length === 0 ? (
        <p className="text-gray-500">
          No Events Found
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">

          {events.map((event) => (
            <div
              key={event._id}
              className="border rounded-xl p-6"
            >
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}

              <h3 className="text-xl font-bold">
                {event.title}
              </h3>

              <p className="text-gray-600 mt-1">
                {event.category}
              </p>

              <p className="text-gray-600">
                {event.venue}
              </p>

              <p className="text-gray-600">
                {new Date(event.date).toLocaleDateString()}
              </p>

              <p className="font-semibold mt-2">
                {Number(event.price) === 0
                  ? "FREE"
                  : `₹${event.price}`}
              </p>

              <div className="flex gap-3 mt-5">

                <button
                  onClick={() => onEdit(event)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <Pencil size={18} />
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(event._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <Trash2 size={18} />
                  Delete
                </button>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}
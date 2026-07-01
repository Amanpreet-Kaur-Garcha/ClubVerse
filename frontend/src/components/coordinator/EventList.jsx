import { Pencil, Trash2 } from "lucide-react";
import { deleteEvent } from "../../utils/storage";

export default function EventList({
  events,
  onDelete,
  onEdit,
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-8">

      <h2 className="text-2xl font-bold mb-6">
        My Events
      </h2>

      {events.length === 0 ? (
        <p>No Events Found</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="border rounded-xl p-6"
            >
              <h3 className="text-xl font-bold">
                {event.title}
              </h3>

              <p>{event.category}</p>

              <p>{event.venue}</p>

              <p>{event.date}</p>

              <p>
                {Number(event.price) === 0
                  ? "FREE"
                  : `₹${event.price}`}
              </p>

              <div className="flex gap-3 mt-5">

                <button
                  onClick={() => onEdit(event)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <Pencil size={18} />
                  Edit
                </button>

                <button
                  onClick={() => {
                    deleteEvent(event.id);
                    onDelete();
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
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
import { useEffect, useState } from "react";

import DashboardCards from "../components/coordinator/DashboardCards";
import EventForm from "../components/coordinator/EventForm";
import EventList from "../components/coordinator/EventList";

import { getEvents } from "../api/eventApi";

export default function CoordinatorDashboard() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadEvents = async () => {
    try {
      const data = await getEvents();
      setEvents(data);
    } catch (error) {
      console.error("Error loading events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Coordinator Dashboard
      </h1>

      <DashboardCards events={events} />

      <div className="mt-10">
        <EventForm
          onAdd={() => {
            loadEvents();
            setEditingEvent(null);
          }}
          editingEvent={editingEvent}
        />
      </div>

      <div className="mt-10">
        {loading ? (
          <p className="text-center text-gray-500">
            Loading events...
          </p>
        ) : (
          <EventList
            events={events}
            onDelete={loadEvents}
            onEdit={setEditingEvent}
          />
        )}
      </div>
    </div>
  );
}
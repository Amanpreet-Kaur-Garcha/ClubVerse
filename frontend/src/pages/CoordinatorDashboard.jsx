import { useEffect, useState } from "react";

import DashboardCards from "../components/coordinator/DashboardCards";
import EventForm from "../components/coordinator/EventForm";
import EventList from "../components/coordinator/EventList";

import { getEvents } from "../utils/storage";

export default function CoordinatorDashboard() {

  const [events, setEvents] = useState([]);

  const [editingEvent, setEditingEvent] = useState(null);

  const loadEvents = () => {
    setEvents(getEvents());
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
          onAdd={loadEvents}
          editingEvent={editingEvent}
        />
      </div>

      <div className="mt-10">
        <EventList
          events={events}
          onDelete={loadEvents}
          onEdit={setEditingEvent}
        />
      </div>

    </div>
  );
}

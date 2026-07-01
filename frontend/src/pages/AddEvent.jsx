import Navbar from "../components/Navbar";
import EventForm from "../components/events/EventForm";

export default function AddEvent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Create New Event
          </h1>

          <p className="text-gray-500 mt-2">
            Fill in the event details and publish it for students.
          </p>
        </div>

        <EventForm />

      </div>
    </div>
  );
}
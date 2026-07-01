import EventCard from "./EventCard";

export default function EventsGrid({ events }) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
}
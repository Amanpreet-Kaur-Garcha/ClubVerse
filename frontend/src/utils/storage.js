export const getEvents = () => {
  return JSON.parse(localStorage.getItem("events")) || [];
};

export const saveEvents = (events) => {
  localStorage.setItem("events", JSON.stringify(events));
};

export const deleteEvent = (id) => {
  const events = getEvents().filter((event) => event.id !== id);
  saveEvents(events);
};

export const updateEvent = (updatedEvent) => {
  const events = getEvents().map((event) =>
    event.id === updatedEvent.id ? updatedEvent : event
  );

  saveEvents(events);
};
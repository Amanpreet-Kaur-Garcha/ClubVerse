import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/events",
});

// Get all events
export const getEvents = async () => {
  const response = await API.get("/");
  return response.data;
};

// Get a single event
export const getEvent = async (id) => {
  const response = await API.get(`/${id}`);
  return response.data;
};

// Create event
export const createEvent = async (eventData) => {
  const response = await API.post("/", eventData);
  return response.data;
};

// Update event
export const updateEvent = async (id, eventData) => {
  const response = await API.put(`/${id}`, eventData);
  return response.data;
};

// Delete event
export const deleteEvent = async (id) => {
  const response = await API.delete(`/${id}`);
  return response.data;
};
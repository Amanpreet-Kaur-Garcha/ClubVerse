const Event = require("../models/Event");

const createEvent = (data) => Event.create(data);

const getEvents = () => Event.find();

const getEventById = (id) => Event.findById(id);

const updateEvent = (id, data) =>
  Event.findByIdAndUpdate(id, data, {
    new: true,
  });

const deleteEvent = (id) =>
  Event.findByIdAndDelete(id);

module.exports = {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
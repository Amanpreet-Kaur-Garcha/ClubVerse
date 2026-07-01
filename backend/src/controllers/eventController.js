const eventService = require("../services/eventService");

exports.createEvent = async (req, res) => {
  try {
    const event = await eventService.createEvent(req.body);

    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await eventService.getEvents();

    res.json(events);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getEvent = async (req, res) => {
  try {
    const event = await eventService.getEventById(
      req.params.id
    );

    res.json(event);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const event =
      await eventService.updateEvent(
        req.params.id,
        req.body
      );

    res.json(event);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await eventService.deleteEvent(req.params.id);

    res.json({
      message: "Event Deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
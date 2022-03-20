import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const EventCard = ({ event }) => {
  
  return (
    <Link className="eventCard" to={`/event/${event._id}`}>
      <img src={event.media.url} alt={event.name} />
      <p>{event.name}</p>
      <span className="eventCardSpan">Event Date:</span><span>{event.eventDate.split("T")[0]}</span>
    </Link>
  );
};

export default EventCard;

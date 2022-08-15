import React from "react";
import EventItem from "./EventItem";

const EventList = ({ item }) => {
  return (
    <ul>
      {item.map((event,id) => (
        <EventItem key={id}/>
      ))}
    </ul>
  );
};

export default EventList;

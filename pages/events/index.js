import { useRouter } from "next/router";
import React, { Fragment } from "react";
import EventList from "../../component/events/event-list";
import EventsSearch from "../../component/events/events-search";
import { getAllEvents } from "../../dummy-data";

const AllEvents = () => {
  const events = getAllEvents();
  const router=useRouter( )
    function findEventsHandler(year,month){
      const fullPath=`/events/${year}/${month}`
      router.push(fullPath)
    }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEvents;

import React from "react";
import EventCountdown from "./EventCountdown";

const EventList = ({ events }) => {
    if(events.length === 0) return <p>Nenhum evento adicionado ainda!</p>
    return (
        <div className="event-list">
            {events.map((event, index) => (
                <EventCountdown key = {index} event={event}/>
                ))}
        </div>
    );
};

export default EventList;
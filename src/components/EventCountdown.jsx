import React, { useState, useEffect } from 'react';
import ConfettiEvent from './ConfettiEvent';

const EventCountdown = ({ event }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const eventTime = new Date(event.date).getTime();
      const diff = eventTime - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [event.date]);

  return (
    <div className="event-countdown" style={{ backgroundColor: event.bgColor, backgroundImage: `url(${event.bgImage})` }}>
      <h2>{event.title}</h2>
      <div className="timer">
        <div><span>{timeLeft.days}</span> Dias</div>
        <div><span>{timeLeft.hours}</span> Horas</div>
        <div><span>{timeLeft.minutes}</span> Minutos</div>
        <div><span>{timeLeft.seconds}</span> Segundos</div>
      </div>
      <ConfettiEvent event={event} />
    </div>
  );
};

export default EventCountdown;

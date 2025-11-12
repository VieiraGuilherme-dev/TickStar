import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import AnimatedBackground from "./components/AnimatedBackground";
import EventForm from "./components/EventForm";
import "./App.css";

const App = () => {
  const [event, setEvent] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);

  const startCountdown = (data) => {
    setEvent(data);
    setShowConfetti(false);
  };

  // Calcula o tempo restante até o evento
  useEffect(() => {
    if (!event) return;

    const interval = setInterval(() => {
      const now = new Date();
      const eventDate = new Date(event.eventDate);
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setShowConfetti(true);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [event]);

  // Se ainda não iniciou o contador, mostra o formulário
  if (!event) {
    return (
      <div className="app-container">
        <AnimatedBackground />
        <EventForm onStart={startCountdown} />
      </div>
    );
  }

  return (
    <div
      className="app-container"
      style={{
        backgroundColor: event.bgColor,
        color: event.theme === "light" ? "#000" : "#fff",
      }}
    >
      {event.theme === "space" && <AnimatedBackground />}
      <div className="countdown">
        <h1>{event.eventName}</h1>
        <div className="time-box">
          <div><span>{timeLeft.days}</span>dias</div>
          <div><span>{timeLeft.hours}</span>h</div>
          <div><span>{timeLeft.minutes}</span>m</div>
          <div><span>{timeLeft.seconds}</span>s</div>
        </div>

        {showConfetti && <Confetti recycle={false} numberOfPieces={400} />}
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import "./EventForm.css";

const EventForm = ({ onStart }) => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [bgColor, setBgColor] = useState("#0d1117");
  const [theme, setTheme] = useState("dark");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName || !eventDate) return;
    onStart({ eventName, eventDate, bgColor, theme });
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>🎯 Crie seu evento</h2>

      <label>Nome do evento:</label>
      <input
        type="text"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        placeholder="Ex: Lançamento do App"
      />

      <label>Data e hora do evento:</label>
      <input
        type="datetime-local"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />

      <label>Cor de fundo:</label>
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />

      <label>Tema:</label>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="dark">Escuro</option>
        <option value="light">Claro</option>
        <option value="space">Espaço</option>
      </select>

      <button type="submit">Iniciar contagem</button>
    </form>
  );
};

export default EventForm;

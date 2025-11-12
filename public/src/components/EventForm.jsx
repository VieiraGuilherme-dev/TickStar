import React, { useState } from "react";

const EventForm = ({ onAddEvent }) => {
    const [title, setTitle] = useState('');
    const[date, setDate] = useState('');
    const[bgCOlor, setBgColor] = useState('');
    const[bgImage, setBgImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddEvent({ title, date, bgColor, bgImage });
        setTitle('');
        setDate('');
        setBgColor('#0d1d31');
        setBgImage('');
    };
    
    return (
        <form className="event-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Título do evento" value = {title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
            <input type="text" placeholder="URL da imagem de fundo" value={bgImage} onChange={(e) => setBgImage(e.target.value)} />
            <button type="submit">Adicionar Evento</button>
        </form>
    );
};

export default EventForm;
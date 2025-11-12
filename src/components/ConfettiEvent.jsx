import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const ConfettiEvent = ({ event }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const eventTime = new Date(event.date).getTime();

      if (eventTime - now <= 0) {
        setShowConfetti(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [event.date]);

  return showConfetti ? <Confetti numberOfPieces={200} recycle={false} /> : null;
};

export default ConfettiEvent;

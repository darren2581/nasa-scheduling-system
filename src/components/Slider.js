import React from 'react';
import '../styles/Slider.css';

const Slider = ({ events }) => {
  return (
    <div className="slider">
      {events.map((event) => (
        <div className="card" key={event.id}>
          <h2>{event.name}</h2>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Leader:</strong> {event.leader}</p>
        </div>
      ))}
    </div>
  );
};

export default Slider;

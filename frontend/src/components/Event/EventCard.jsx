import React from 'react';
import './EventCard.css';

const EventCard = (props) => {
  return (
    <div className="event-card">
      <div className="event-image-container">
        <img src={props.image} alt="Event" className="event-image" />
      </div>
      <div className="event-details">
        <h3 className="event-title">{props.title}</h3>
        <p className="event-subtitle">{props.subtitle}</p>
      </div>
      <div className="event-info">
        <div className="event-date">
          <span className="date">{props.date}</span>
          <span className="day">{props.day}</span>
        </div>
        <div className="event-mode">{props.mode}</div>
      </div>
      <div className="event-register">
        <button className="register-button">{props.buttonText}</button>
      </div>
    </div>
  );
};

export default EventCard;

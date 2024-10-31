import React from 'react';
import './PaymentCard.css';
import mostPopular from '../../homeimg/mostPopular.png'; // Replace with your image path
import ChatBubbleRedDown from '../../homeimg/ChatBubbleRedDown.png'; // Replace with your image path

const PaymentCard = ({ planType, price, joinText, isPopular, popularText }) => {
  return (
    <div className="payment-card">
      {isPopular && (
        <div className="yellow-bubble">
          <img src={mostPopular} alt="Yellow Bubble" />
          <span className="yellow-text">{popularText}</span>
        </div>
      )}
      <div className="card-content">
        <h2>{planType}</h2>
        <p className="price">₹{price}</p>
        <div className="red-bubble">
          <img src={ChatBubbleRedDown} alt="Red Bubble" />
          <span className="red-text">{joinText}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;

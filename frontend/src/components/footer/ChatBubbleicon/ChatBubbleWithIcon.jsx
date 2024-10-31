import React from 'react';
import './ChatBubbleWithIcon.css';

const ChatBubbleWithIcon = ({ text, bubbleImage, iconImage, link }) => {
    return (
        <div
            className="chat-bubble-with-icon"
            style={{ backgroundImage: `url(${bubbleImage})` }}
        >
            <img src={iconImage} alt="icon" className="icon" />
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-link">
                {text}
            </a>
        </div>
    );
};

export default ChatBubbleWithIcon;

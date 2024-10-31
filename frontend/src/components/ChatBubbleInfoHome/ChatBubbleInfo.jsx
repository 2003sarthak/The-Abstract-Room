import React from 'react';
import './ChatBubbleInfo.css';

export default function ChatBubbleInfo({ position, backgroundImage, text, textColor }) {
    return (
        <div
            className={`chat-bubble ${position}`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                color: textColor
            }}
        >
            {text}
        </div>
    );
}

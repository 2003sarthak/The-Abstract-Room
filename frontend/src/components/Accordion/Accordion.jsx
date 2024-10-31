import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ title, info }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <span className="yellow-sphere"></span>
                <h3 className="accordion-title">{title}</h3>
                <span className={`accordion-arrow ${isOpen ? 'rotate' : ''}`}>▲</span>
            </div>
            {isOpen && <p className="accordion-info">{info}</p>}
        </div>
    );
};

export default Accordion;

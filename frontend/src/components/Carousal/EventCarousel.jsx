import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import EventCard from '../Event/EventCard';
import events from './eventData';
import './EventCarousel.css';

export default function EventCarousel() {
    const [slide, setSlide] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4); // Default items to show

    // Update itemsToShow based on screen width
    useEffect(() => {
        const updateItemsToShow = () => {
            if(window.innerWidth <= 400){
                setItemsToShow(1);
            }else if (window.innerWidth <= 768 && window.innerWidth >= 401) {
                setItemsToShow(2);
            } else {
                setItemsToShow(4);
            }
        };

        updateItemsToShow(); // Initial setup

        // Add a listener to handle screen resize
        window.addEventListener('resize', updateItemsToShow);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', updateItemsToShow);
    }, [window.innerWidth]);

    const nextSlide = () => {
        if (slide + itemsToShow >= events.length) return; // Prevent going beyond available events
        setSlide(slide + itemsToShow); // Move forward by the number of items
    };

    const prevSlide = () => {
        if (slide === 0) return; // Prevent going before the first item
        setSlide(slide - itemsToShow); // Move backward by the number of items
    };

    return (
        <div className='event-carousel'>
            <div className='header'>
                <div className='title'>Upcoming Events</div>
                <div className="navigation">
                    <div className='arrow left' onClick={prevSlide}>
                        <FaArrowLeft />
                    </div>
                    <div className='arrow right' onClick={nextSlide}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className="carousel-container">
                {
                    events.slice(slide, slide + itemsToShow).map((data, index) => (
                        <EventCard className='card' {...data} key={index} />
                    ))
                }
            </div>
        </div>
    );
}

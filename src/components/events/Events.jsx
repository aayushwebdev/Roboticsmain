import React, { ReactDOM, useState } from 'react';
// import styles from './Events.module.css';
import './Events.css'
import Upcoming from './Upcoming';
import Past from './Past';

const Events = () => {
    const [ToggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    const getActiveClass = (index, className) =>
      ToggleState === index ? className : "";
  
    return (
        <div className='events' id='events'>
            <div className="heading">
                <h3>Our Events</h3>
                <p>Join us at our exiciting events</p>
            </div>
            <div className="container">
                <ul className="tab-list">
                <li
                    className={`tabs ${getActiveClass(1, "active-tabs")}`}
                    onClick={() => toggleTab(1)}
                >Upcoming Events</li>
                <li
                    className={`tabs ${getActiveClass(2, "active-tabs")}`}
                    onClick={() => toggleTab(2)}
                >Past Events</li>
                </ul>
                <div className="content-container">
                <div className={`content ${getActiveClass(1, "active-content")}`}>
                    <Upcoming />
                </div>
                <div className={`content ${getActiveClass(2, "active-content")}`}>
                    <Past />
                </div>
                </div>
            </div>
        </div>
      
    );
  };

export default Events
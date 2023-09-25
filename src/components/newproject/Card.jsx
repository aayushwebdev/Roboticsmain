import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Modal from 'react-modal';

function Card({ imagen }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [show, setShown] = useState(false);

  const props3 = useSpring({
    zIndex: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <>
      <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>Roboarm</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
      <div className={Styles.btnn}>
      <button className={Styles.btn} onClick={() => setModalIsOpen(true)}>See More</button>
      </div>
    </animated.div>
    <div className={Styles.modal}>
      <Modal isOpen={modalIsOpen}>
        <h2>Modal title</h2>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
    
    </>
    
  );
}

export default Card;

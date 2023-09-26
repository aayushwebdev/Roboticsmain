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
      <p className={Styles.text}>In the ideation round of Robocon 2023, our team scored an impressive 98.5 points out of 100. We presented a comprehensive project that involved CAD modeling and documentation, focusing on the development of ring throwing and collecting robots. This outstanding achievement reflects our team's dedication, creativity, and technical expertise, reaffirming our commitment to excellence in robotics. We continue to explore new horizons and opportunities to apply our innovative ideas in other exciting endeavors.</p>
      <input className={Styles.expandBtn} type='checkbox' />
                

    </animated.div>
    
    </>
    
  );
}

export default Card;

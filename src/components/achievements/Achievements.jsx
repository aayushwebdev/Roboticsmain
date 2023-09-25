import React from 'react';
import styles from './Achievements.module.css';
import Img1 from '../../images/robocon.jpeg';
import Img2 from '../../images/quadcopter 2.jpg';

const Achievements = () => {
  return (
      <div className={styles.achievement}>
      <div className={styles.heading}>
        <h3>Achievements</h3>
        <p>Our journey of accomplishments</p>
      </div>
        <div className={styles.card}>
            <div className={styles.layer} >
                <div className={styles.cardImg}>
                    <img src={Img1} alt="Our Team" />
                </div>
                <div className={styles.cardContent}>
                    <h5>ROBOCON</h5>
                    <p className={styles.text}>In the ideation round of Robocon 2023, our team scored an impressive 98.5 points out of 100. We presented a comprehensive project that involved CAD modeling and documentation, focusing on the development of ring throwing and collecting robots. This outstanding achievement reflects our team's dedication, creativity, and technical expertise, reaffirming our commitment to excellence in robotics. We continue to explore new horizons and opportunities to apply our innovative ideas in other exciting endeavors.</p>
                    <input className={styles.expandBtn} type='checkbox' />
                </div>
            </div>
            <div className={styles.layer}>
                <div className={styles.cardImg}>
                    <img src={Img2} alt="Our Team" />
                </div>
                <div className={styles.cardContent}>
                    <h5>Gujrat RoboFest</h5>
                    <p className={styles.text}>This project incorporates cutting-edge features like a variable front axle, automatic belt tensioning, modular 3D-printed belts for superior traction, variable speed control, and an autonomous tank drive system. It promises to push the boundaries of robotics innovation and redefine the landscape of technological advancement.</p>
                    <input className={styles.expandBtn} type='checkbox' />
                </div>
            </div>
        </div>
      </div>
  )
}

export default Achievements;
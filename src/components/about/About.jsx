import React from 'react';
import styles from './About.module.css';
import Team from '../../images/team.jpg';

const About = () => {
  return (
    <div className={styles.about} id='about'>
        <div className={styles.heading}>
            <h3>About Us</h3>
            <p>We're team Robotics</p>
        </div>
        <div className={styles.aboutContainer}>
            <div className={styles.aboutImg}>
                <img src={Team} alt="Our Team" />
            </div>
            <div className={styles.aboutContent}>
                <p>Welcome to the Robotics Club, MANIT, where a community of passionate learners and creators come together to delve into the captivating world of robotics. Our club is a vibrant tapestry of individuals driven by curiosity, consistently active and motivated, and a shared zeal for all things robotic. Our engagement goes beyond the theoretical – we actively participate in renowned competitions such as ABU Robocon. What sets us apart is our unwavering commitment to collaboration and learning. We're more than just a club; we're a supportive family that thrives on collective growth. Our journey isn't just about building robots; it's about honing skills, expanding horizons, and embracing the power of innovation. In the ever-evolving landscape of robotics, with open arms, we invite like-minded individuals to join us on this exhilarating journey of discovery and growth. Together, we'll continue to unwind the tangled mess of wires of curiosity and debug the codes of learning.
</p>
            </div>
        </div>
    </div>
  )
}

export default About
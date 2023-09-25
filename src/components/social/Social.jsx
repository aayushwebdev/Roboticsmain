import React from 'react';
import styles from './Social.module.css';

const Social = () => {
  return (
    <div className={styles.social}>
        <a href="https://www.linkedin.com/company/robotics-club-nit-bhopal/mycompany/" target="_blank"><i class='bx bxl-linkedin' ></i></a>
        <a href="https://www.instagram.com/roboticsclubmanit/?hl=en" target="_blank"><i class='bx bxl-instagram-alt' ></i></a>
        <a href="https://twitter.com/manitbpl?lang=en" target="_blank"><i class='bx bxl-youtube' ></i></a>
        <a href="https://www.facebook.com/roboticsnitb/" target="_blank"><i class='bx bxl-facebook' ></i></a>


    </div>
  )
}

export default Social
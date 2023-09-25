import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import Email from 'emailjs-com';
import { MdLocationOn, MdPhone, MdOutlineEmail } from "react-icons/md";
import { AiOutlineMail } from 'react-icons/ai'
import { FaYoutube, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BiLogoLinkedin } from "react-icons/bi";
import Modal from './Modal';

const Footer = () => {

  const [openModal, setOpenModal] = useState(false);
  function sendEmail(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.footer} id='footer'>
        <h3>"Robotics is the bridge between the dreams of today and the realities of tomorrow, where technology and imagination unite to shape a brighter, more automated future."</h3>
        <div className={styles.content}>
          <div className={styles.details}>
              <div className={styles.address}>
                  <a><MdLocationOn /></a>
                  <p>Maulana Azad National Institute of Technology Bhopal, 462003 (M.P.)</p>
              </div>
              <div className={styles.contact}>
                  <a><MdPhone /></a>
                  <p>Aryan +91 8770920525 <br />Sakshi +91 9414912292</p>
              </div>
              <div className={styles.email}>
                  <a><MdOutlineEmail /></a>
                  <p>roboclubmanit@gmail.com</p>
              </div>
              <div className={styles.socials}>
                <a><BiLogoLinkedin /></a>
                <a><FaInstagram /></a>
                <a><FaYoutube /></a>
                <a><FaTwitter /></a>
              </div>
          </div>
          <div className={styles.form}>
            <form onSubmit={sendEmail}>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
            
              <textarea name="" id="" cols="10" rows="10" placeholder="Your Message"></textarea>
              <div className={styles.btnContainer}>
              <button className={styles.btn}>
  <a href="mailto:roboclubmanit@gmail.com">Send</a>
</button>

              </div>
            </form>
          </div>
        </div>
        <div className={styles.footerLinks}>
        <div className={styles.devBtn}>
          <button onClick={() => setOpenModal(true)}>Meet the Developers</button>
          <Modal open={openModal} onClose={() => setOpenModal(false)} />
        </div>
        <div className={styles.links}>
            <ul>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Event</a></li>
              <li><a>Projects</a></li>
              <li><a>Achievements</a></li>
              <li><a>Teams</a></li>
            </ul>
          </div>
        </div>
          <div className={styles.footerText}>
            <p>Copyright &copy; 2023 by <a href='https://linktr.ee/roboticsnitb'>RoboticsNITB</a> | All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
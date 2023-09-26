import React, { useEffect } from 'react'
import styles from './Footer.module.css';
import Shwetank1 from '../../images/shwetank1.jpg'
import Sakshi from '../../images/image1.jpg';
import { FaLinkedin,FaInstagram, FaTwitter } from 'react-icons/fa';
import { BiLogoLinkedin } from 'react-icons/bi';

const Modal = ({open, onClose}) => {
    
    // const scroll = useEffect(() => {
    //     document.body.style.overflowY = "hidden";
    //     return () => {
    //       document.body.style.overflowY = "scroll";
    //     };
    //   }, []);

    if(!open) return null;
  return (
    <div onClick={onClose} className={styles.overlay}>
        <div className={styles.modalContainer}>
        <p onClick={onClose} className={styles.closeBtn}>X</p>
        
            <div className={styles.container}>
                <div className={styles.shape}>
                    <div className={styles.image1}></div>
                </div>
                <h3>Shwetank Aryan</h3>
                <h4 className={styles.title}>Web Developer</h4>
                <div className={styles.icons}>
                    <a href='/'><FaInstagram /></a>
                    <a href='/'><BiLogoLinkedin /></a>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.shape}>
                    <div className={styles.image2}></div>
                </div>
                <h3>Aayush Meshram</h3>
                <h4 className={styles.title}>Web Developer</h4>
                <div className={styles.icons}>
                    <a href='/'><FaInstagram /></a>
                    <a href='/'><BiLogoLinkedin /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal
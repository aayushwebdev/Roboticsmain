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
        
            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <div className={styles.skewed}>
                        <img src={Sakshi} id='img' alt='' />
                    </div>
                </div>
                <div className={styles.cont}>
                    <h2>Shwetank Aryan</h2>
                    <p>Web developer</p>
                    <div className={styles.links}>
                        <a><BiLogoLinkedin /></a>
                        <a><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <div className={styles.skewed}>
                        <img src={Shwetank1} id='img' alt='' />
                    </div>
                </div>
                <div className={styles.cont}>
                    <h2>Aayush Meshram</h2>
                    <p>Web developer</p>
                    <div className={styles.links}>
                        <a><BiLogoLinkedin /></a>
                        <a><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal
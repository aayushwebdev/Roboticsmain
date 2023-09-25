import React from 'react'
import Img1 from '../../images/image1.jpg';
import styles from './App.module.css';

const Modal = ({open,onClose}) => {
    if(!open) return null
  return (
    <div onClick={onClose} className={styles.overlay}>
        <div className={styles.modalContainer} >
            <img src={Img1} alt='' />
        </div>
        <div className={styles.modalRight}>
            <p onClick={onClose} className={styles.closeBtn}>X</p>
            <div className={styles.content}>
                <p>Do you want a</p>
                <h1>$20 CREDIT</h1>
                <p>for your first trade?</p>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.btnPrimary}>
                    <span className={styles.bold}>YES</span>, Ilove NFT's
                </button>
                <button className={styles.btnOutline}>
                    <span className={styles.bold}>NO</span>, thanks
                </button>
            </div>
        </div>
    </div>
  )
}

export default Modal
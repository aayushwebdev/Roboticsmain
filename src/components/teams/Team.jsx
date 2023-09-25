import React from 'react';
import styles from "./Team.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//4th year
import Shwetank from '../../images/shwetank.jpg';
import Aryan from '../../images/aryan.jpg';
import Sakshi from '../../images/sakshi.jpg'
import Heramb from '../../images/heramb.jpg';
import Suraj from '../../images/suraj.jpg'
import Img1 from '../../images/image1.jpg';
import Arushi from '../../images/arushi.jpg';
import Sandeep from "../../images/sandeep.jpg";
import Adish from '../../images/adish.jpeg';
import Adarsh from '../../images/adarsh.jpeg';
import { FaLinkedin, FaInstagram, FaTwitter  } from 'react-icons/fa';

//3rd year
import Atharv from '../../images/atharv.jpg';
import Anjal from '../../images/anjal.jpg';
import Ayush from '../../images/ayush.jpg';
import Ranu from '../../images/ranu.jpg';
import Abhishek from '../../images/abhishek.png';
import Anmol from '../../images/anmol.jpg'
import Satyam from '../../images/satyam.jpg';
import Yatendra from '../../images/yatendra.jpg';
import Sahil from '../../images/sahil.jpg';
import Snehlata from '../../images/snehlata.JPG';

const Team = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div className={styles.team} id='team'>
            <div className={styles.heading}>
                <h3>Our Team</h3>
                <p>Meet the minds behind team Robotics</p>
            </div>
            <div className={styles.panel}>
            <div className={styles.subHeading}>
                <h5>Batch of 2024</h5>
            </div>
            <Carousel responsive={responsive}>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Sakshi} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>SAKSHI JAIN<br/><span>COORDINATOR</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Aryan} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>ARYAN GARG<br/><span>CO- COORDINATOR</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Shwetank} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>SHWETANK ARYAN<br/><span>TECHNICAL HEAD (ECE)/ WEB DEVELOPER</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Sandeep} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>SANDEEP KUMAR<br/><span>TECHNICAL HEAD (ME)</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Arushi} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>ARUSHI CHANDRAKAR<br/><span>DESIGN HEAD</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Heramb} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>HERAMB DWIVEDI<br/><span>EVENT MANAGEMENT</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Adarsh} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>ADARSH JAIN<br/><span>PUBLIC RELATION HEAD</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Adish} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>ADISH JAIN<br/><span>SPONSORSHIP HEAD</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Suraj} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>SURAJ NIGAM<br/><span>CONTENT HEAD</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            </Carousel>
            </div>
            <div className={styles.panel}>
            <div className={styles.subHeading}>
                <h5>Batch of 2025</h5>
            </div>
            <Carousel
            responsive={responsive}>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Abhishek} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>ABHISHEK KUMAR GAUTAM<br/><span>OPERATIONAL HEAD (TECHNICAL)</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Ayush} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>AYUSH GUPTA<br/><span>OPERATIONAL HEAD (NON-TECHNICAL)</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Anjal} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>ANJAL BHIJGAVANE<br/><span>TECHNICAL CO-HEAD (ECE)</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Yatendra} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>YATENDRA KUMAR<br/><span>TECHNICAL CO-HEAD (MECH)</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Sahil} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>SAHIL JUNEJA<br/><span>EVENT MANAGEMENT CO-HEAD</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Snehlata} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>SNEHLATA<br/><span>SOCIAL MEDIA CO-HEAD</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Ranu} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>RANU DHANOTIYA<br/><span>DESIGN CO-HEAD</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Atharv} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>ATHARV KUMAR<br/><span>PROJECT HEAD</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Anmol} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>ANMOL GOUR<br/><span>PUBLIC RELATION CO-HEAD</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
            <div className={styles.cards}>
                        <div className={styles.cardImg}>
                            <img src={Satyam} alt=" " />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.details}>
                                <h4>SATYAM SHARMA<br/><span>SPONSORSHIP & COLLABORATION CO-HEAD</span></h4>
                                    
                                <ul className={styles.socialIcons}>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            </Carousel>
            </div>
        </div>
    )
}

export default Team;
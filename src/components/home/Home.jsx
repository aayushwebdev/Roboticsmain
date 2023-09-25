import React from 'react';
import styles from './Home.module.css';
import Video from '../../images/bgVideo1.mp4';
import Navbar from '../navbar/Navbar';
import Social from '../social/Social';
import About from '../about/About';
import Achievement from '../achievements/Achievements';
import Sponsors from '../sponsors/Sponsors';
import Footer from '../footer/Footer';
import Gallery from '../gallery/Gallery';
import Project from '../newproject/App';
import Team from '../teams/Team';
import Events from '../events/Events';
import App from '../newgallery/App';

const Home = () => {

  return (
    <>
     {/* <Navbar /> */}
      <Social />
      <div className={styles.bgContainer} id='home'>
      <Navbar /> 
          {/* <div className={styles.overlay}></div>
            <video src={Video} autoPlay loop muted /> */}
            
            <div className={styles.container}>
                <h1>ROBOTICS CLUB</h1>
                <h3>MANIT BHOPAL</h3>
            </div>
            {/* <a href="#about" className={styles.arrow}>
              <span></span>
              <span></span>
              <span></span>
            </a> */}
            <a href="#about"><div className={styles.scrollDown}></div></a>
    </div>
    <About />
    <App />
    <Events />
    <Sponsors />
    <Project />
    {/* <Gallery /> */}
    <Achievement />
    <Team />
    <Footer />
    </>
    
  )
}

export default Home;
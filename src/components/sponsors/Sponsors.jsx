import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './Sponsors.module.css';
import Video from '../../images/bgVideo2.mp4';
import Img1 from '../../images/1.png';
import Img2 from '../../images/2.png';
import Img3 from '../../images/3.png';
import Img4 from '../../images/4.png';
import Img5 from '../../images/5.png';
import Img6 from '../../images/6.png';
import Img7 from '../../images/7.png';
import Img8 from '../../images/8.png';
import Img9 from '../../images/9.png';

// const Sponsors = () => {
//   return (
//     <div className={styles.sponsors}>
//         <div className={styles.overlay}></div>
//             <video src={Video} autoPlay loop muted />
            
//             {/* <div className={styles.heading}>
//                 <h3>Our Sponsors</h3>
//             </div> */}
//             <div className={styles.container}>
//                 <div className={styles.sponsorImg}>
//                     <img src={Img1} alt='sponsor1' />
//                 </div>
//                 <div className={styles.sponsorImg}>
//                     <img src={Img2} alt='sponsor1' />
//                 </div>
//                 <div className={styles.sponsorImg}>
//                     <img src={Img3} alt='sponsor1' />
//                 </div>
//                 <div className={styles.sponsorImg}>
//                     <img src={Img4} alt='sponsor1' />
//                 </div>
//                 <div className={styles.sponsorImg}>
//                     <img src={Img5} alt='sponsor1' />
//                 </div>
//                 <div className={styles.sponsorImg}>
//                     <img src={Img6} alt='sponsor1' />
//                 </div>
//                 <div className={styles.sponsorImg}>
//                     <img src={Img7} alt='sponsor1' />
//                 </div>
//                 <div className={styles.sponsorImg}>
//                     <img src={Img8} alt='sponsor1' />
//                 </div>
//                 <div className={styles.sponsorImg}>
//                     <img src={Img9} alt='sponsor1' />
//                 </div>
//             </div>
    
//     </div>
//   )
// }

class Sponsors extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            SlidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className={styles.sponsors}>
                <Slider {...settings}>
                <div className={styles.sponsorImg}>
                     <img src={Img1} alt='sponsor1' />
                 </div>
                 <div className={styles.sponsorImg}>
                     <img src={Img2} alt='sponsor1' />
                 </div>
                 <div className={styles.sponsorImg}>
                     <img src={Img3} alt='sponsor1' />
                 </div>
                 <div className={styles.sponsorImg}>
                     <img src={Img4} alt='sponsor1' />
                 </div>
                 <div className={styles.sponsorImg}>
                     <img src={Img5} alt='sponsor1' />
                 </div>
                 <div className={styles.sponsorImg}>
                     <img src={Img6} alt='sponsor1' />
                 </div>
                 <div className={styles.sponsorImg}>
                     <img src={Img7} alt='sponsor1' />
                 </div>
                 <div className={styles.sponsorImg}>
                     <img src={Img8} alt='sponsor1' />
                 </div>
                 <div className={styles.sponsorImg}>
                     <img src={Img9} alt='sponsor1' />
                 </div>
                </Slider>
            </div>
        )
    }
}

export default Sponsors
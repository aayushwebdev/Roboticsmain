import React, {useEffect, useState} from 'react'
import styles from './Project.module.css';
import { AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import { Phones } from './Data';
import Img1 from '../../images/robo 2.jpg'
import Carousel from 'react-spring-3d-carousel';
import { useSpring, animated } from "react-spring";

import { v4 as uuidv4 } from "uuid";
import Card from "./Data";
// import Carousel from "./Carousel";
import slideImage from "../../images/background.jpg";


const Project = () => {
    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptoggle, setpopuptoggle] = useState(false);
    const [styling, setstyling] = useState(null);
    const changecontent=(phone)=> {
        setpopupcontent([phone]);
        setpopuptoggle(!popuptoggle);
        if(styling===null){
            setstyling({
                position: 'fixed',
            });
        }else(setstyling(null));
    };
  return (
    <div className={styles.app_container}>
        <div className={styles.heading}>
            <h3>Our Projects</h3>
            <p>We have some wonderful projects</p>
        </div>
        <div className={styles.content_container} style={styling}>
            {
                Phones.map((phone) => {
                    return (
                        <div className={styles.content_card}>
                            <img src={`../images/${phone.image}`} alt="" />
                            <p>{phone.product}</p>
                            <button onClick={()=>changecontent(phone)}>See More</button>
                        </div>
                    );
                })}
            {popuptoggle && (
                <div className={styles.pop_up_container} onClick={changecontent}>
                    <div className={styles.pop_up_body}>
                        <div className={styles.pop_up_header}>
                            <button onClick={changecontent}>x</button>
                        </div>
                        <div className={styles.pop_up_content}>
                            {popupcontent.map((pop)=>{
                                return(
                                    <div className={styles.pop_up_card}>
                                        <img src={''} alt='' />
                                        <p>name: {pop.product}</p>
                                        <p>{pop.details}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div> 
                </div>)}
        </div>
    </div>
  )
}

// const Project = () => {
//     let cards = [
//         {
//           key: uuidv4(),
//           content: (
//             <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
//           )
//         },
//         {
//           key: uuidv4(),
//           content: (
//             <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
//           )
//         },
//         {
//           key: uuidv4(),
//           content: (
//             <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
//           )
//         },
//         {
//           key: uuidv4(),
//           content: (
//             <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
//           )
//         },
//         {
//           key: uuidv4(),
//           content: (
//             <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
//           )
//         }
//       ];
//     return (
//         <div className={styles.project}>
//             <div className={styles.heading}>
//                 <h3>Our Projects</h3>
//                 <p>We have some wonderful projects</p>
//             </div>
//             <Carousel
//                 cards={cards}
//                 height="500px"
//                 width="60%"
//                 margin="0 auto"
//                 offset={4}
//                 showArrows={true}
//             />
//         </div>
//     )
// }

export default Project
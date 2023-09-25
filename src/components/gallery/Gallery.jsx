import React from 'react';
import styles from "./Gallery.module.css";
import Img1 from "../../images/image1.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <div className={styles.heading}>
                <h3>Our Gallery</h3>
                <p>We're continuously progressing</p>
            </div>
            {/* <div className={styles.imgContainer}>
                <div><img src={Img1} alt='' /></div>
                <div className={styles.vStretch}><img src={Img1} alt='' /></div>
                <div className={styles.hStretch}><img src={Img1} alt='' /></div>
                <div><img src={Img1} alt='' /></div>
                <div><img src={Img1} alt='' /></div>
                <div className={styles.vStretch}><img src={Img1} alt='' /></div>
                <div className={styles.bigStretch}><img src={Img1} alt='' /></div>
                <div><img src={Img1} alt='' /></div>
                <div className={styles.hStretch}><img src={Img1} alt='' /></div>
                {/* <div><img src={Img1} alt='' /></div>
                <div><img src={Img1} alt='' /></div>
                <div><img src={Img1} alt='' /></div>
                <div className={styles.vStretch}><img src={Img1} alt='' /></div>
                <div><img src={Img1} alt='' /></div>
                <div className={styles.bigStretch}><img src={Img1} alt='' /></div>
                <div><img src={Img1} alt='' /></div>
                <div className={styles.hStretch}><img src={Img1} alt='' /></div>
                <div><img src={Img1} alt='' /></div>
                <div className={styles.bigStretch}><img alt='' /></div>
                <div><img src={Img1} alt='' /></div>
                <div><img src={Img1} alt='' /></div> }
            </div> */}

            <Swiper
                effect={ 'coverflow' }
                grabCursor={ true }
                centeredSlides={ true }
                loop={ true }
                sliderPerView={ 'auto' }
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    } }
                    pagination={{el:'.swiperPagination',clickable:true}}
                    navigation={{
                        nextEl:'.swiperButtonNext',
                        prevEl:'.swiperButtonPrev',
                        clickable:true}}
                    modules={[EffectCoverflow, Pagination, Navigation]} 
                    className={styles.swiperContainer}
            >
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={Img1} alt='' />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={Img1} alt='' />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={Img1} alt='' />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={Img1} alt='' />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={Img1} alt='' />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={Img1} alt='' />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={Img1} alt='' />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={Img1} alt='' />
                </SwiperSlide>

                <div className={styles.sliderController}>
                    <div className={styles.swiperButtonPrev.sliderArrow}>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className={styles.swiperButtonNext.sliderArrow}>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className={styles.swiperPagination}></div>
                </div>
            </Swiper>

        </div>
    )
}

export default Gallery;
import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

function HomeBrand({ className }) {
    return (
        <>
            <div className={`rts-brand ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rts-brand__wrapper">
                                <div className="rts-brand__wrapper--text">
                                    <h5 data-sal="slide-down" data-sal-delay={300} data-sal-duration={800}>
                                        Hosting solutions trusted by the owners of <span>2,800,000</span>{" "}
                                        domains.
                                    </h5>
                                    <div className="rts-brand__wrapper--text-review" data-sal="slide-down" data-sal-delay={400} data-sal-duration={800}>
                                        <div className="review">
                                            <div className="star">
                                                Excellent{" "}
                                                <img src="assets/images/brand/review-star.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="review__company">
                                            954 reviews on{" "}
                                            <img src="assets/images/brand/trust-pilot.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="rts-brand__slider"
                                    speed={1500}
                                    slidesPerView={6}
                                    spaceBetween={40}
                                    loop={true}
                                    autoplay={true}
                                    breakpoints={{
                                        1200: { slidesPerView: 6 },
                                        900: { slidesPerView: 5 },
                                        768: { slidesPerView: 5 },
                                        580: { slidesPerView: 4 },
                                        450: { slidesPerView: 3 },
                                        0: { slidesPerView: 3 },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link to="#" aria-label="brand-link">
                                                <img src="assets/images/brand/01.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link to="#" aria-label="brand-link">
                                                <img src="assets/images/brand/02.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link to="#" aria-label="brand-link">
                                                <img src="assets/images/brand/03.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link to="#" aria-label="brand-link">
                                                <img src="assets/images/brand/04.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link to="#" aria-label="brand-link">
                                                <img src="assets/images/brand/05.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link to="#" aria-label="brand-link">
                                                <img src="assets/images/brand/06.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link to="#" aria-label="brand-link">
                                                <img src="assets/images/brand/07.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeBrand
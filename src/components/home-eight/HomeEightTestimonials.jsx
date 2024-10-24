import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Scrollbar, A11y, EffectFade, Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

function HomeEightTestimonials() {
    return (
        <>
            <div className="rts-client-feedback cloud__feedback">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="rts-section w-500 text-center">
                            <h2
                                className="rts-section__title"
                                data-sal="slide-down"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
                                Our Client Feedback
                            </h2>
                            <p
                                className="rts-section__description"
                                data-sal="slide-down"
                                data-sal-delay={200}
                                data-sal-duration={800}
                            >
                                We’re honored and humbled by the great feedback we receive from our
                                customers on a daily basis.
                            </p>
                        </div>
                    </div>
                    {/* client feedback */}
                    <div className="row">
                        <Swiper
                            modules={[ Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                            className="feedback-slider"
                            slidesPerView={3}
                            spaceBetween={30}
                            centeredSlides={true}
                            loop={true}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 3,
                                },
                                900: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                580: {
                                    slidesPerView: 1.5,
                                },
                                0: {
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            {/* single slider */}
                            <SwiperSlide>
                                <div className="feedback-card">
                                    <div className="feedback-card__border" />
                                    <div className="feedback-card__single">
                                        <div className="feadback-card__single__rating">
                                            <i className="fa-sharp fa-solid fa-star" />
                                            <i className="fa-sharp fa-solid fa-star" />
                                            <i className="fa-sharp fa-solid fa-star" />
                                            <i className="fa-sharp fa-solid fa-star" />
                                        </div>
                                        <p className="feedback-card__single--text">
                                            I am using Digital Ocean Plan in Cloud ways and I can confirm
                                            it is very good. Also, additional the backup with my hosting
                                            is awesome too.
                                        </p>
                                        <div className="feedback-card__single--author">
                                            <div className="author">
                                                <img
                                                    src="assets/images/author/author__one.png"
                                                    height={50}
                                                    width={50}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="author__meta">
                                                <h6>Zayed Khan</h6>
                                                <span>Managing Director</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* single slider end */}
                            {/* single slider */}
                            <SwiperSlide>
                                <div className="feedback-card">
                                    <div className="feedback-card__border" />
                                    <div className="feedback-card__single">
                                        <div className="feadback-card__single__rating">
                                            <i className="fa-sharp fa-solid fa-star" />
                                            <i className="fa-sharp fa-solid fa-star" />
                                            <i className="fa-sharp fa-solid fa-star" />
                                            <i className="fa-sharp fa-solid fa-star" />
                                        </div>
                                        <p className="feedback-card__single--text">
                                            I am using Digital Ocean Plan in Cloud ways and I can confirm
                                            it is very good. Also, additional the backup with my hosting
                                            is awesome too.
                                        </p>
                                        <div className="feedback-card__single--author">
                                            <div className="author">
                                                <img
                                                    src="assets/images/author/author__two.png"
                                                    height={50}
                                                    width={50}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="author__meta">
                                                <h6>Rubel Hossen</h6>
                                                <span>Web Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* single slider end */}
                            {/* single slider */}
                            <SwiperSlide>
                                <div className="feedback-card">
                                    <div className="feedback-card__border" />
                                    <div className="feedback-card__single">
                                        <div className="feadback-card__single__rating">
                                            <i className="fa-sharp fa-solid fa-star" />
                                            <i className="fa-sharp fa-solid fa-star" />
                                            <i className="fa-sharp fa-solid fa-star" />
                                            <i className="fa-sharp fa-solid fa-star" />
                                        </div>
                                        <p className="feedback-card__single--text">
                                            I am using Digital Ocean Plan in Cloud ways and I can confirm
                                            it is very good. Also, additional the backup with my hosting
                                            is awesome too.
                                        </p>
                                        <div className="feedback-card__single--author">
                                            <div className="author">
                                                <img
                                                    src="assets/images/author/author__three.png"
                                                    height={50}
                                                    width={50}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="author__meta">
                                                <h6>Ashique Mahmud</h6>
                                                <span>Managing Director</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* single slider end */}
                            {/* single slider */}
                            <SwiperSlide>
                                <div className="feedback-card">
                                    <div className="feedback-card__border" />
                                    <div className="feedback-card__single">
                                        <div className="feadback-card__single__rating">
                                            <i className="fa-sharp fa-solid fa-star" />
                                            <i className="fa-sharp fa-solid fa-star" />
                                            <i className="fa-sharp fa-solid fa-star" />
                                            <i className="fa-sharp fa-solid fa-star" />
                                        </div>
                                        <p className="feedback-card__single--text">
                                            I am using Digital Ocean Plan in Cloud ways and I can confirm
                                            it is very good. Also, additional the backup with my hosting
                                            is awesome too.
                                        </p>
                                        <div className="feedback-card__single--author">
                                            <div className="author">
                                                <img
                                                    src="assets/images/author/author__four.png"
                                                    height={50}
                                                    width={50}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="author__meta">
                                                <h6>Samira Khan</h6>
                                                <span>Managing Director</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* single slider end */}
                        </Swiper>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeEightTestimonials
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination, Scrollbar, A11y, EffectFade, Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

function HomeTwoTestimonials() {
    return (
        <div>
            <section className="rts-testimonial-two testimonial__bg section__padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rts-section section-style-two">
                                <div className="rts-section__two">
                                    <h6
                                        className="sub__title"
                                        data-sal="slide-down"
                                        data-sal-delay={100}
                                        data-sal-duration={800}
                                    >
                                        Testimonials
                                    </h6>
                                    <h2
                                        className="title"
                                        data-sal="slide-down"
                                        data-sal-delay={200}
                                        data-sal-duration={800}
                                    >
                                        Featured Client Stories
                                    </h2>
                                    <p
                                        className="description mb-0"
                                        data-sal="slide-down"
                                        data-sal-delay={300}
                                        data-sal-duration={800}
                                    >
                                        We’re honored and humbled by the great feedback we receive from
                                        our customers on a daily basis.
                                    </p>
                                </div>
                                <div className="rts-section-button rts-slider__btn__two ">
                                    <div className="slide__btn rts-prev">
                                        <i className="fa-regular fa-chevron-left" />
                                    </div>
                                    <div className="slide__btn rts-next">
                                        <i className="fa-regular fa-chevron-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* testimonial section */}
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                modules={[Pagination, Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                className="testimonial-slider-two mb--60 overflow-visible"
                                slidesPerView={1.7}
                                spaceBetween={30}
                                speed={1000}
                                loop={true}
                                centeredSlides={true}
                                scrollbar={{
                                    el: ".rts-swiper-scrollbar",
                                    hide: false,
                                    draggable: true,
                                    dragSize: 350,
                                }}
                                navigation={{
                                    nextEl: ".rts-next",
                                    prevEl: ".rts-prev",
                                }}
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 1.7,
                                    },
                                    900: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    580: {
                                        slidesPerView: 1.5,
                                    },
                                    0: {
                                        slidesPerView: 1,
                                        scrollbar: {
                                            hide: true,
                                        },
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <div className="rts-testimonial-two__single">
                                        <div className="quote">
                                            <img src="assets/images/icon/quote__white.svg" alt="" />
                                        </div>
                                        <div className="testimonial-text">
                                            <h5>
                                                We are grateful to have found an ideal managed cloud hosting
                                                platform for our customers, and look to grow our hosting
                                                business through Cloudways.
                                            </h5>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                        <div className="author">
                                            <img src="assets/images/author/author__one.png" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="rts-testimonial-two__single">
                                        <div className="quote">
                                            <img src="assets/images/icon/quote__white.svg" alt="" />
                                        </div>
                                        <div className="testimonial-text">
                                            <h5>
                                                We are grateful to have found an ideal managed cloud hosting
                                                platform for our customers, and look to grow our hosting
                                                business through Cloudways.
                                            </h5>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                        <div className="author">
                                            <img src="assets/images/author/author__two.png" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="rts-testimonial-two__single">
                                        <div className="quote">
                                            <img src="assets/images/icon/quote__white.svg" alt="" />
                                        </div>
                                        <div className="testimonial-text">
                                            <h5>
                                                We are grateful to have found an ideal managed cloud hosting
                                                platform for our customers, and look to grow our hosting
                                                business through Cloudways.
                                            </h5>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                        <div className="author">
                                            <img src="assets/images/author/author__three.png" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="rts-testimonial-two__single">
                                        <div className="quote">
                                            <img src="assets/images/icon/quote__white.svg" alt="" />
                                        </div>
                                        <div className="testimonial-text">
                                            <h5>
                                                We are grateful to have found an ideal managed cloud hosting
                                                platform for our customers, and look to grow our hosting
                                                business through Cloudways.
                                            </h5>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                        <div className="author">
                                            <img src="assets/images/author/author__four.png" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <div className="rts-swiper-scrollbar" />
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HomeTwoTestimonials
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
function AboutTestimonials({ className }) {
    return (
        <>
            <div className={`rts-client-feedback section__padding ${className}`}>
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
                         modules={[Pagination, EffectFade, Scrollbar, A11y, Autoplay]}
                            className="feedback-slider"
                            slidesPerView={3}
                            spaceBetween={30}
                            centeredSlides={true}
                            loop={true}
                            pagination={{ clickable: true, el: '.swiper-pagination' }}
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
                                        <div className="quote-icon">
                                            <svg
                                                width={33}
                                                height={27}
                                                viewBox="0 0 33 27"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.12927 12.9165H11.1667C11.8905 12.9165 12.5847 13.204 13.0965 13.7159C13.6083 14.2277 13.8958 14.9219 13.8958 15.6457V23.8332C13.8958 24.557 13.6083 25.2512 13.0965 25.763C12.5847 26.2748 11.8905 26.5623 11.1667 26.5623H2.97917C2.25535 26.5623 1.56117 26.2748 1.04935 25.763C0.537536 25.2512 0.25 24.557 0.25 23.8332V14.7587C0.250828 12.2879 0.861546 9.85559 2.02796 7.67749C3.19437 5.49939 4.88041 3.6429 6.93646 2.27275L9.37906 0.635254L10.8801 2.90046L8.4375 4.53796C7.01878 5.48869 5.81394 6.72487 4.89994 8.16753C3.98594 9.61019 3.38288 11.2276 3.12927 12.9165ZM22.2328 12.9165H30.2702C30.994 12.9165 31.6882 13.204 32.2 13.7159C32.7118 14.2277 32.9993 14.9219 32.9993 15.6457V23.8332C32.9993 24.557 32.7118 25.2512 32.2 25.763C31.6882 26.2748 30.994 26.5623 30.2702 26.5623H22.0827C21.3589 26.5623 20.6647 26.2748 20.1529 25.763C19.6411 25.2512 19.3535 24.557 19.3535 23.8332V14.7587C19.3543 12.2879 19.9651 9.85559 21.1315 7.67749C22.2979 5.49939 23.9839 3.6429 26.04 2.27275L28.4962 0.635254L29.9836 2.90046L27.541 4.53796C26.1223 5.48869 24.9175 6.72487 24.0035 8.16753C23.0895 9.61019 22.4864 11.2276 22.2328 12.9165Z"
                                                    fill="#4C5671"
                                                />
                                            </svg>
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
                                        <div className="quote-icon">
                                            <svg
                                                width={33}
                                                height={27}
                                                viewBox="0 0 33 27"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.12927 12.9165H11.1667C11.8905 12.9165 12.5847 13.204 13.0965 13.7159C13.6083 14.2277 13.8958 14.9219 13.8958 15.6457V23.8332C13.8958 24.557 13.6083 25.2512 13.0965 25.763C12.5847 26.2748 11.8905 26.5623 11.1667 26.5623H2.97917C2.25535 26.5623 1.56117 26.2748 1.04935 25.763C0.537536 25.2512 0.25 24.557 0.25 23.8332V14.7587C0.250828 12.2879 0.861546 9.85559 2.02796 7.67749C3.19437 5.49939 4.88041 3.6429 6.93646 2.27275L9.37906 0.635254L10.8801 2.90046L8.4375 4.53796C7.01878 5.48869 5.81394 6.72487 4.89994 8.16753C3.98594 9.61019 3.38288 11.2276 3.12927 12.9165ZM22.2328 12.9165H30.2702C30.994 12.9165 31.6882 13.204 32.2 13.7159C32.7118 14.2277 32.9993 14.9219 32.9993 15.6457V23.8332C32.9993 24.557 32.7118 25.2512 32.2 25.763C31.6882 26.2748 30.994 26.5623 30.2702 26.5623H22.0827C21.3589 26.5623 20.6647 26.2748 20.1529 25.763C19.6411 25.2512 19.3535 24.557 19.3535 23.8332V14.7587C19.3543 12.2879 19.9651 9.85559 21.1315 7.67749C22.2979 5.49939 23.9839 3.6429 26.04 2.27275L28.4962 0.635254L29.9836 2.90046L27.541 4.53796C26.1223 5.48869 24.9175 6.72487 24.0035 8.16753C23.0895 9.61019 22.4864 11.2276 22.2328 12.9165Z"
                                                    fill="#4C5671"
                                                />
                                            </svg>
                                        </div>
                                        <p className="feedback-card__single--text">
                                            I am using Digital Ocean Plan in Cloud ways and I can confirm
                                            it is very good. Also, additional the backup with my hosting
                                            is awesome too.
                                        </p>
                                        <div className="feedback-card__single--author">
                                            <div className="author">
                                                <img
                                                    src="assets/images/testimonials/author.png"
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
                                        <div className="quote-icon">
                                            <svg
                                                width={33}
                                                height={27}
                                                viewBox="0 0 33 27"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.12927 12.9165H11.1667C11.8905 12.9165 12.5847 13.204 13.0965 13.7159C13.6083 14.2277 13.8958 14.9219 13.8958 15.6457V23.8332C13.8958 24.557 13.6083 25.2512 13.0965 25.763C12.5847 26.2748 11.8905 26.5623 11.1667 26.5623H2.97917C2.25535 26.5623 1.56117 26.2748 1.04935 25.763C0.537536 25.2512 0.25 24.557 0.25 23.8332V14.7587C0.250828 12.2879 0.861546 9.85559 2.02796 7.67749C3.19437 5.49939 4.88041 3.6429 6.93646 2.27275L9.37906 0.635254L10.8801 2.90046L8.4375 4.53796C7.01878 5.48869 5.81394 6.72487 4.89994 8.16753C3.98594 9.61019 3.38288 11.2276 3.12927 12.9165ZM22.2328 12.9165H30.2702C30.994 12.9165 31.6882 13.204 32.2 13.7159C32.7118 14.2277 32.9993 14.9219 32.9993 15.6457V23.8332C32.9993 24.557 32.7118 25.2512 32.2 25.763C31.6882 26.2748 30.994 26.5623 30.2702 26.5623H22.0827C21.3589 26.5623 20.6647 26.2748 20.1529 25.763C19.6411 25.2512 19.3535 24.557 19.3535 23.8332V14.7587C19.3543 12.2879 19.9651 9.85559 21.1315 7.67749C22.2979 5.49939 23.9839 3.6429 26.04 2.27275L28.4962 0.635254L29.9836 2.90046L27.541 4.53796C26.1223 5.48869 24.9175 6.72487 24.0035 8.16753C23.0895 9.61019 22.4864 11.2276 22.2328 12.9165Z"
                                                    fill="#4C5671"
                                                />
                                            </svg>
                                        </div>
                                        <p className="feedback-card__single--text">
                                            I am using Digital Ocean Plan in Cloud ways and I can confirm
                                            it is very good. Also, additional the backup with my hosting
                                            is awesome too.
                                        </p>
                                        <div className="feedback-card__single--author">
                                            <div className="author">
                                                <img
                                                    src="assets/images/testimonials/author-2.png"
                                                    height={50}
                                                    width={50}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="author__meta">
                                                <h6>Rubel Khan</h6>
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
                                        <div className="quote-icon">
                                            <svg
                                                width={33}
                                                height={27}
                                                viewBox="0 0 33 27"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.12927 12.9165H11.1667C11.8905 12.9165 12.5847 13.204 13.0965 13.7159C13.6083 14.2277 13.8958 14.9219 13.8958 15.6457V23.8332C13.8958 24.557 13.6083 25.2512 13.0965 25.763C12.5847 26.2748 11.8905 26.5623 11.1667 26.5623H2.97917C2.25535 26.5623 1.56117 26.2748 1.04935 25.763C0.537536 25.2512 0.25 24.557 0.25 23.8332V14.7587C0.250828 12.2879 0.861546 9.85559 2.02796 7.67749C3.19437 5.49939 4.88041 3.6429 6.93646 2.27275L9.37906 0.635254L10.8801 2.90046L8.4375 4.53796C7.01878 5.48869 5.81394 6.72487 4.89994 8.16753C3.98594 9.61019 3.38288 11.2276 3.12927 12.9165ZM22.2328 12.9165H30.2702C30.994 12.9165 31.6882 13.204 32.2 13.7159C32.7118 14.2277 32.9993 14.9219 32.9993 15.6457V23.8332C32.9993 24.557 32.7118 25.2512 32.2 25.763C31.6882 26.2748 30.994 26.5623 30.2702 26.5623H22.0827C21.3589 26.5623 20.6647 26.2748 20.1529 25.763C19.6411 25.2512 19.3535 24.557 19.3535 23.8332V14.7587C19.3543 12.2879 19.9651 9.85559 21.1315 7.67749C22.2979 5.49939 23.9839 3.6429 26.04 2.27275L28.4962 0.635254L29.9836 2.90046L27.541 4.53796C26.1223 5.48869 24.9175 6.72487 24.0035 8.16753C23.0895 9.61019 22.4864 11.2276 22.2328 12.9165Z"
                                                    fill="#4C5671"
                                                />
                                            </svg>
                                        </div>
                                        <p className="feedback-card__single--text">
                                            I am using Digital Ocean Plan in Cloud ways and I can confirm
                                            it is very good. Also, additional the backup with my hosting
                                            is awesome too.
                                        </p>
                                        <div className="feedback-card__single--author">
                                            <div className="author">
                                                <img
                                                    src="assets/images/testimonials/author-3.png"
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

export default AboutTestimonials
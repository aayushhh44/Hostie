import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination, Scrollbar, A11y, EffectFade, Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
function AffiliateTestimonials ({ className }) {
    return (
        <>
            <section className={`rts-testimonial area-3 section__padding bg-white ${className}`}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-title-area w-500 text-center">
                            <h2
                                className="section-title"
                                data-sal="slide-down"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
                                Our Client Feedback
                            </h2>
                            <p
                                className="desc"
                                data-sal="slide-down"
                                data-sal-delay={200}
                                data-sal-duration={800}
                            >
                                We’re honored and humbled by the great feedback we receive from our
                                customers on a daily basis.
                            </p>
                        </div>
                    </div>
                    {/* testimonial */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-inner">
                                <Swiper
                                    modules={[Pagination, Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="testimonial-slider-three rts-testimonial__slider"
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    speed={1000}
                                    loop={true}
                                    centeredSlides={true}
                                    pagination={{
                                        el: '.swiper-pagination',
                                        clickable: true,
                                    }}
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
                                    {/* single testimonial */}
                                    <SwiperSlide>
                                        <div className="rts-testimonial__single">
                                            <div className="quote-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={33}
                                                    height={27}
                                                    viewBox="0 0 33 27"
                                                    fill="none"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M3.12927 12.9165H11.1667C11.8905 12.9165 12.5847 13.204 13.0965 13.7159C13.6083 14.2277 13.8958 14.9219 13.8958 15.6457V23.8332C13.8958 24.557 13.6083 25.2512 13.0965 25.763C12.5847 26.2748 11.8905 26.5623 11.1667 26.5623H2.97917C2.25535 26.5623 1.56117 26.2748 1.04935 25.763C0.537536 25.2512 0.25 24.557 0.25 23.8332V14.7587C0.250828 12.2879 0.861546 9.85559 2.02796 7.67749C3.19437 5.49939 4.88041 3.6429 6.93646 2.27275L9.37906 0.635254L10.8801 2.90046L8.4375 4.53796C7.01878 5.48869 5.81394 6.72487 4.89994 8.16753C3.98594 9.61019 3.38288 11.2276 3.12927 12.9165ZM22.2333 12.9165H30.2707C30.9945 12.9165 31.6887 13.204 32.2005 13.7159C32.7123 14.2277 32.9998 14.9219 32.9998 15.6457V23.8332C32.9998 24.557 32.7123 25.2512 32.2005 25.763C31.6887 26.2748 30.9945 26.5623 30.2707 26.5623H22.0832C21.3594 26.5623 20.6652 26.2748 20.1534 25.763C19.6415 25.2512 19.354 24.557 19.354 23.8332V14.7587C19.3548 12.2879 19.9656 9.85559 21.132 7.67749C22.2984 5.49939 23.9844 3.6429 26.0405 2.27275L28.4967 0.635254L29.9841 2.90046L27.5415 4.53796C26.1228 5.48869 24.9179 6.72487 24.0039 8.16753C23.0899 9.61019 22.4869 11.2276 22.2333 12.9165Z"
                                                        fill="#4C5671"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    I am using Digital Ocean Plan in Cloud ways and I can
                                                    confirm it is very good. Also, additional the backup with
                                                    my hosting is awesome too.
                                                </p>
                                            </div>
                                            <div className="author__meta">
                                                <div className="author__meta--image">
                                                    <img src="assets/images/testimonials/author.png" alt="" />
                                                </div>
                                                <div className="author__meta--details">
                                                    <Link to="#">Rubel Hossen</Link>
                                                    <span>Software Developer</span>
                                                </div>
                                            </div>
                                            <div className="shape">
                                                <img
                                                    src="assets/images/testimonials/testimonial-wrapper-shape.svg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* single testimonial end */}
                                    {/* single testimonial */}
                                    <SwiperSlide>
                                        <div className="rts-testimonial__single">
                                            <div className="quote-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={33}
                                                    height={27}
                                                    viewBox="0 0 33 27"
                                                    fill="none"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M3.12927 12.9165H11.1667C11.8905 12.9165 12.5847 13.204 13.0965 13.7159C13.6083 14.2277 13.8958 14.9219 13.8958 15.6457V23.8332C13.8958 24.557 13.6083 25.2512 13.0965 25.763C12.5847 26.2748 11.8905 26.5623 11.1667 26.5623H2.97917C2.25535 26.5623 1.56117 26.2748 1.04935 25.763C0.537536 25.2512 0.25 24.557 0.25 23.8332V14.7587C0.250828 12.2879 0.861546 9.85559 2.02796 7.67749C3.19437 5.49939 4.88041 3.6429 6.93646 2.27275L9.37906 0.635254L10.8801 2.90046L8.4375 4.53796C7.01878 5.48869 5.81394 6.72487 4.89994 8.16753C3.98594 9.61019 3.38288 11.2276 3.12927 12.9165ZM22.2333 12.9165H30.2707C30.9945 12.9165 31.6887 13.204 32.2005 13.7159C32.7123 14.2277 32.9998 14.9219 32.9998 15.6457V23.8332C32.9998 24.557 32.7123 25.2512 32.2005 25.763C31.6887 26.2748 30.9945 26.5623 30.2707 26.5623H22.0832C21.3594 26.5623 20.6652 26.2748 20.1534 25.763C19.6415 25.2512 19.354 24.557 19.354 23.8332V14.7587C19.3548 12.2879 19.9656 9.85559 21.132 7.67749C22.2984 5.49939 23.9844 3.6429 26.0405 2.27275L28.4967 0.635254L29.9841 2.90046L27.5415 4.53796C26.1228 5.48869 24.9179 6.72487 24.0039 8.16753C23.0899 9.61019 22.4869 11.2276 22.2333 12.9165Z"
                                                        fill="#4C5671"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    I am using Digital Ocean Plan in Cloud ways and I can
                                                    confirm it is very good. Also, additional the backup with
                                                    my hosting is awesome too.
                                                </p>
                                            </div>
                                            <div className="author__meta">
                                                <div className="author__meta--image">
                                                    <img
                                                        src="assets/images/testimonials/author-2.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author__meta--details">
                                                    <Link to="#">Jamie Knop</Link>
                                                    <span>Business Owner</span>
                                                </div>
                                            </div>
                                            <div className="shape">
                                                <img
                                                    src="assets/images/testimonials/testimonial-wrapper-shape.svg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* single testimonial end */}
                                    {/* single testimonial */}
                                    <SwiperSlide>
                                        <div className="rts-testimonial__single">
                                            <div className="quote-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={33}
                                                    height={27}
                                                    viewBox="0 0 33 27"
                                                    fill="none"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M3.12927 12.9165H11.1667C11.8905 12.9165 12.5847 13.204 13.0965 13.7159C13.6083 14.2277 13.8958 14.9219 13.8958 15.6457V23.8332C13.8958 24.557 13.6083 25.2512 13.0965 25.763C12.5847 26.2748 11.8905 26.5623 11.1667 26.5623H2.97917C2.25535 26.5623 1.56117 26.2748 1.04935 25.763C0.537536 25.2512 0.25 24.557 0.25 23.8332V14.7587C0.250828 12.2879 0.861546 9.85559 2.02796 7.67749C3.19437 5.49939 4.88041 3.6429 6.93646 2.27275L9.37906 0.635254L10.8801 2.90046L8.4375 4.53796C7.01878 5.48869 5.81394 6.72487 4.89994 8.16753C3.98594 9.61019 3.38288 11.2276 3.12927 12.9165ZM22.2333 12.9165H30.2707C30.9945 12.9165 31.6887 13.204 32.2005 13.7159C32.7123 14.2277 32.9998 14.9219 32.9998 15.6457V23.8332C32.9998 24.557 32.7123 25.2512 32.2005 25.763C31.6887 26.2748 30.9945 26.5623 30.2707 26.5623H22.0832C21.3594 26.5623 20.6652 26.2748 20.1534 25.763C19.6415 25.2512 19.354 24.557 19.354 23.8332V14.7587C19.3548 12.2879 19.9656 9.85559 21.132 7.67749C22.2984 5.49939 23.9844 3.6429 26.0405 2.27275L28.4967 0.635254L29.9841 2.90046L27.5415 4.53796C26.1228 5.48869 24.9179 6.72487 24.0039 8.16753C23.0899 9.61019 22.4869 11.2276 22.2333 12.9165Z"
                                                        fill="#4C5671"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    I am using Digital Ocean Plan in Cloud ways and I can
                                                    confirm it is very good. Also, additional the backup with
                                                    my hosting is awesome too.
                                                </p>
                                            </div>
                                            <div className="author__meta">
                                                <div className="author__meta--image">
                                                    <img
                                                        src="assets/images/testimonials/author-3.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author__meta--details">
                                                    <Link to="#">Samira Khan</Link>
                                                    <span>Digital marketer</span>
                                                </div>
                                            </div>
                                            <div className="shape">
                                                <img
                                                    src="assets/images/testimonials/testimonial-wrapper-shape.svg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* single testimonial end */}
                                    {/* single testimonial */}
                                    <SwiperSlide>
                                        <div className="rts-testimonial__single">
                                            <div className="quote-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={33}
                                                    height={27}
                                                    viewBox="0 0 33 27"
                                                    fill="none"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M3.12927 12.9165H11.1667C11.8905 12.9165 12.5847 13.204 13.0965 13.7159C13.6083 14.2277 13.8958 14.9219 13.8958 15.6457V23.8332C13.8958 24.557 13.6083 25.2512 13.0965 25.763C12.5847 26.2748 11.8905 26.5623 11.1667 26.5623H2.97917C2.25535 26.5623 1.56117 26.2748 1.04935 25.763C0.537536 25.2512 0.25 24.557 0.25 23.8332V14.7587C0.250828 12.2879 0.861546 9.85559 2.02796 7.67749C3.19437 5.49939 4.88041 3.6429 6.93646 2.27275L9.37906 0.635254L10.8801 2.90046L8.4375 4.53796C7.01878 5.48869 5.81394 6.72487 4.89994 8.16753C3.98594 9.61019 3.38288 11.2276 3.12927 12.9165ZM22.2333 12.9165H30.2707C30.9945 12.9165 31.6887 13.204 32.2005 13.7159C32.7123 14.2277 32.9998 14.9219 32.9998 15.6457V23.8332C32.9998 24.557 32.7123 25.2512 32.2005 25.763C31.6887 26.2748 30.9945 26.5623 30.2707 26.5623H22.0832C21.3594 26.5623 20.6652 26.2748 20.1534 25.763C19.6415 25.2512 19.354 24.557 19.354 23.8332V14.7587C19.3548 12.2879 19.9656 9.85559 21.132 7.67749C22.2984 5.49939 23.9844 3.6429 26.0405 2.27275L28.4967 0.635254L29.9841 2.90046L27.5415 4.53796C26.1228 5.48869 24.9179 6.72487 24.0039 8.16753C23.0899 9.61019 22.4869 11.2276 22.2333 12.9165Z"
                                                        fill="#4C5671"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    I am using Digital Ocean Plan in Cloud ways and I can
                                                    confirm it is very good. Also, additional the backup with
                                                    my hosting is awesome too.
                                                </p>
                                            </div>
                                            <div className="author__meta">
                                                <div className="author__meta--image">
                                                    <img src="assets/images/testimonials/author.png" alt="" />
                                                </div>
                                                <div className="author__meta--details">
                                                    <Link to="#">Jamie Knop</Link>
                                                    <span>Business Owner</span>
                                                </div>
                                            </div>
                                            <div className="shape">
                                                <img
                                                    src="assets/images/testimonials/testimonial-wrapper-shape.svg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* single testimonial end */}
                                </Swiper>
                                {/* pagination dot */}
                                <div className="swiper-pagination slider-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AffiliateTestimonials
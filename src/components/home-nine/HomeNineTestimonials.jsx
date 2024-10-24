import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination, Scrollbar, A11y, EffectFade, Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

function HomeNineTestimonials() {
    return (
        <>
            <section className="rts-testimonial wp__hosting__option section__padding">
                <div className="container">
                    <div className="row ">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="rts-section w-460 text-center">
                                <h3
                                    className="rts-section__title"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    Our Customers Love Us
                                </h3>
                                <p
                                    className="rts-section__description"
                                    data-sal="slide-down"
                                    data-sal-delay={400}
                                    data-sal-duration={800}
                                >
                                    From 24/7 support that acts as your extended team to incredibly fast
                                    website performance
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* testimonial */}
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                            modules={[ Pagination, Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                            className="rts-testimonial__slider testimonial__slider--first"
                                slidesPerView={3}
                                spaceBetween={30}
                                speed={1000}
                                loop={true}
                                pagination={{ el: '.rts-dot__button', clickable: true }}
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    600: {
                                        slidesPerView: 2,
                                    },
                                    0: {
                                        slidesPerView: 1,
                                    },
                                }}
                            >
                                {/* single testimonial */}
                                <SwiperSlide>
                                    <div className="rts-testimonial__single">
                                        <div className="rating">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                        <div className="content">
                                            <p>
                                                Excellent option for those looking for High-End WordPress
                                                Hosting. I have been using Cloud ways.
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
                                    </div>
                                </SwiperSlide>
                                {/* single testimonial end */}
                                {/* single testimonial */}
                                <SwiperSlide>
                                    <div className="rts-testimonial__single">
                                        <div className="rating">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                        <div className="content">
                                            <p>
                                                Excellent option for those looking for High-End WordPress
                                                Hosting. I have been using Cloud ways.
                                            </p>
                                        </div>
                                        <div className="author__meta">
                                            <div className="author__meta--image">
                                                <img src="assets/images/testimonials/author-2.png" alt="" />
                                            </div>
                                            <div className="author__meta--details">
                                                <Link to="#">Jahed Khan</Link>
                                                <span>Business Owner</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* single testimonial end */}
                                {/* single testimonial */}
                                <SwiperSlide>
                                    <div className="rts-testimonial__single">
                                        <div className="rating">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                        <div className="content">
                                            <p>
                                                Excellent option for those looking for High-End WordPress
                                                Hosting. I have been using Cloud ways.
                                            </p>
                                        </div>
                                        <div className="author__meta">
                                            <div className="author__meta--image">
                                                <img src="assets/images/testimonials/author-3.png" alt="" />
                                            </div>
                                            <div className="author__meta--details">
                                                <Link to="#">Samira Khan</Link>
                                                <span>Digital Marketer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* single testimonial end */}
                                {/* single testimonial */}
                                <SwiperSlide>
                                    <div className="rts-testimonial__single">
                                        <div className="rating">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                        <div className="content">
                                            <p>
                                                Excellent option for those looking for High-End WordPress
                                                Hosting. I have been using Cloud ways.
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
                                    </div>
                                </SwiperSlide>
                                {/* single testimonial end */}
                                {/* pagination dot */}
                                <div className="rts-dot__button slider-center" />
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeNineTestimonials
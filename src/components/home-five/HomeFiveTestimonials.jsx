import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination, Scrollbar, A11y, EffectFade, Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

function HomeFiveTestimonials() {
    return (
        <>
            <section className="rts-testimonial area-4 section__padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <h3 className="section-title">Our Customer Say</h3>
                        <p className="desc">Trusted by Millions of People &amp; Businesses</p>
                    </div>
                    {/* testimonial */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-inner">
                                <Swiper
                                    modules={[Pagination, Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="testimonial-slider-four rts-testimonial__slider"
                                    slidesPerView={1}
                                    spaceBetween={0}
                                    speed={1500}
                                    loop={true}
                                    pagination={{
                                        el: '.swiper-pagination',
                                        clickable: true,
                                    }}
                                    navigation={{
                                        nextEl: '.swiper-btn-next',
                                        prevEl: '.swiper-btn-prev',
                                    }}
                                    breakpoints={{
                                        1200: { slidesPerView: 1 },
                                        900: { slidesPerView: 1 },
                                        768: { slidesPerView: 1 },
                                        580: { slidesPerView: 1 },
                                        0: { slidesPerView: 1 },
                                    }}
                                >
                                    {/* single testimonial */}
                                    <SwiperSlide>
                                        <div className="rts-testimonial__single">
                                            <div className="quote-icon">
                                                <img src="assets/images/testimonials/quote.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <p>
                                                    We are grateful to have found an ideal managed cloud
                                                    hosting platform for our customers, and look to grow our
                                                    hosting business through Cloudways.
                                                </p>
                                            </div>
                                            <ul className="star-rating">
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-solid fa-star" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-solid fa-star" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-solid fa-star" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-solid fa-star" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-solid fa-star" />
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="author__meta">
                                                <div className="author__meta--image">
                                                    <img src="assets/images/testimonials/author.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* single testimonial end */}
                                    {/* single testimonial */}
                                    <SwiperSlide>
                                        <div className="rts-testimonial__single">
                                            <div className="quote-icon">
                                                <img src="assets/images/testimonials/quote.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <p>
                                                    We are grateful to have found an ideal managed cloud
                                                    hosting platform for our customers, and look to grow our
                                                    hosting business through Cloudways.
                                                </p>
                                            </div>
                                            <ul className="star-rating">
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-solid fa-star" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-solid fa-star" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-solid fa-star" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-solid fa-star" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-solid fa-star" />
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="author__meta">
                                                <div className="author__meta--image">
                                                    <img
                                                        src="assets/images/testimonials/author-2.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* single testimonial end */}
                                    {/* single testimonial */}
                                    <SwiperSlide>
                                        <div className="rts-testimonial__single">
                                            <div className="quote-icon">
                                                <img src="assets/images/testimonials/quote.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <p>
                                                    We are grateful to have found an ideal managed cloud
                                                    hosting platform for our customers, and look to grow our
                                                    hosting business through Cloudways.
                                                </p>
                                            </div>
                                            <ul className="star-rating">
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-solid fa-star" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-solid fa-star" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-solid fa-star" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-solid fa-star" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-solid fa-star" />
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="author__meta">
                                                <div className="author__meta--image">
                                                    <img
                                                        src="assets/images/testimonials/author-3.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* single testimonial end */}
                                </Swiper>
                                <img
                                    className="bg-shape-image"
                                    src="assets/images/testimonials/bg-round-shape.svg"
                                    alt=""
                                />
                                <div className="swiper-btn-area">
                                    <div className="swiper-btn swiper-btn-prev">
                                        <i className="fa-sharp fa-regular fa-chevron-left" />
                                    </div>
                                    <div className="swiper-btn swiper-btn-next">
                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="bg-shape-image2"
                    src="assets/images/testimonials/bg__shape_three.svg"
                    alt=""
                />
            </section>

        </>
    )
}

export default HomeFiveTestimonials
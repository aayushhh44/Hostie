import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination, Scrollbar, A11y, EffectFade, Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function HomeThreeBrand() {
    useEffect(() => {
		sal({
			threshold: 0.1,
			once: true,
		});
	}, []);
    return (
        <>
            <div className="rts-brand area-3 pt-100 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="rts-brand__wrapper"
                                data-sal="slide-down"
                                data-sal-delay={700}
                                data-sal-duration={800}
                            >
                                <div className="rts-brand__wrapper--text">
                                    <h3>
                                        Hosting solutions trusted by the owners of <span>2,800,000</span>{" "}
                                        domains.
                                    </h3>
                                    <div className="rts-brand__wrapper--text-review">
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
                                    modules={[Pagination, Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="rts-brand__slider"
                                    slidesPerView={6}
                                    spaceBetween={40}
                                    pagination={{
                                        el: ".swiper-pagination",
                                        clickable: true,
                                    }}
                                    loop={true}
                                    breakpoints={{
                                        1200: {
                                            slidesPerView: 6,
                                        },
                                        900: {
                                            slidesPerView: 5,
                                        },
                                        768: {
                                            slidesPerView: 5,
                                        },
                                        580: {
                                            slidesPerView: 4,
                                        },
                                        450: {
                                            slidesPerView: 3,
                                        },
                                        0: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link to="#">
                                                <img src="assets/images/brand/01.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link to="#">
                                                <img src="assets/images/brand/02.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link to="#">
                                                <img src="assets/images/brand/03.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link to="#">
                                                <img src="assets/images/brand/04.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link to="#">
                                                <img src="assets/images/brand/05.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link to="#">
                                                <img src="assets/images/brand/06.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link to="#">
                                                {" "}
                                                <img src="assets/images/brand/07.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link to="#">
                                                <img src="assets/images/brand/08.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link to="#">
                                                <img src="assets/images/brand/01.svg" alt="" />
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

export default HomeThreeBrand
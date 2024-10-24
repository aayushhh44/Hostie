import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function HomeSixContact({ className }) {
    return (
        <>
            <section className="rts-contact-form pt-120">
                <div className="container">
                    <div className="row gy-30 justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="contact-form">
                                <div
                                    className="contact-form__content"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    <div className="contact-form__content--image">
                                        <img
                                            src="assets/images/contact/contact-form.png"
                                            width={260}
                                            height={188}
                                            alt=""
                                        />
                                    </div>
                                    <h1 className="contact-form__content--title">
                                        Request a Consultation.
                                    </h1>
                                    <p className="contact-form__content--description">
                                        Schedule a call today and one of our experts to help you decide
                                        which service is ideal for your business and budget.
                                    </p>
                                    <div className="contact__shape">
                                        <img
                                            src="assets/images/contact/contact__animated__arrow.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1 col-md-10">
                            <div className="form">
                                <h5>Send a message</h5>
                                <form className="form__content" method="post" action="#">
                                    <div className="form__control">
                                        <input
                                            type="text"
                                            className="input-form"
                                            placeholder="what is your name?"
                                            required
                                        />
                                        <input
                                            type="email"
                                            className="input-form"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </div>
                                    <div className="form__control">
                                        <input
                                            type="text"
                                            className="input-form"
                                            placeholder="Phone Number"
                                            required
                                        />
                                        <select name="state" id="state" className="input-form">
                                            <option value={1}>state</option>
                                            <option value={1}>Bangladesh</option>
                                            <option value={1}>India</option>
                                            <option value={1}>Pakistan</option>
                                            <option value={1}>Nepal</option>
                                            <option value={1}>Maldives</option>
                                        </select>
                                    </div>
                                    <textarea
                                        name="message"
                                        cols={30}
                                        rows={10}
                                        placeholder="A brief description about your consultation"
                                        required=""
                                        defaultValue={""}
                                    />
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <label htmlFor="checkbox">
                                        By submitting your information you provide written consent to
                                        hostie and its family of brands contacting you.
                                    </label>
                                    <button type="submit" className="submit__btn">
                                        Submit Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={`row pt-100 pb-100 ${className}`}>
                        <div className="col-lg-12">
                            <div className="rts-brand__wrapper">
                            <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, EffectFade, A11y, Autoplay]}
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
                                    <span
                                        className="swiper-notification"
                                        aria-live="assertive"
                                        aria-atomic="true"
                                    />
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeSixContact
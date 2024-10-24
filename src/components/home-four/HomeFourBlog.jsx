import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import posts from '../../data/Posts.json';
import PostOne from '../blog/PostOne';


function HomeFourBlog() {
    return (
        <>
            <section className="rts-blog pt-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="rts-section w-510 text-center">
                            <h2
                                className="rts-section__title"
                                data-sal="slide-down"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
                                Latest New &amp; Articles
                            </h2>
                            <p
                                className="rts-section__description"
                                data-sal="slide-down"
                                data-sal-delay={200}
                                data-sal-duration={800}
                            >
                                Choose from data centers worldwide to store content your website
                                visitors Cloudflare, has a network
                            </p>
                        </div>
                    </div>
                    {/* blog start */}
                    <div className="row g-30">
                        {posts.map((data, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-10">
                                    <div className="rts-blog__single">
                                        {
                                            <PostOne
                                                blogCategory={data.category}
                                                blogID={data.id}
                                                blogImage={`${data.image}`}
                                                authorImg={`${data.authorImg}`}
                                                blogTitle={data.title}
                                                blogAuthor={data.author}
                                                blogPublishedDate={data.publishedDate}
                                            />
                                        }
                                    </div>

                                </div>
                            )
                        }).slice(0, 3)}
                    </div>
                    <div className="row pt-100 pb-100">
                        <div className="col-lg-12">
                            <div className="rts-brand__wrapper">
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

export default HomeFourBlog
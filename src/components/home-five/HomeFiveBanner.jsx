import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'magnific-popup/dist/magnific-popup.css';
import $ from 'jquery';
import 'magnific-popup';
function HomeFiveBanner() {
    useEffect(() => {
		sal({
			threshold: 0.1,
			once: true,
		});
        
	}, []);
    useEffect(() => {
        $('.popup-youtube, .popup-video').magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
        
        return () => {
          $.magnificPopup.close(); // Cleanup
        };
      }, []);
    return (
        <>
            <section className="rts-hero-five rts-hero__five">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-xl-6 col-md-10">
                            <div className="banner-content">
                                <div className="banner-top">
                                    <div
                                        className="icon"
                                        data-sal="slide-down"
                                        data-sal-delay={100}
                                        data-sal-duration={800}
                                    >
                                        <img src="assets/images/banner/title-shape.svg" alt="" />
                                    </div>
                                    Meet Hostie
                                </div>
                                <h1
                                    className="banner-title"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    Web{" "}
                                    <span>
                                        Hosting <img src="assets/images/banner/line.svg" alt="" />
                                    </span>
                                    with Purpose
                                </h1>
                                <p data-sal="slide-down" data-sal-delay={300} data-sal-duration={800}>
                                    We make sure your website is fast, secure &amp; always up - so your
                                    visitors &amp; search engines trust you Guaranteed.
                                </p>
                                <div
                                    className="banner-btn"
                                    data-sal="slide-down"
                                    data-sal-delay={500}
                                    data-sal-duration={800}
                                >
                                    <Link
                                        to="#"
                                        className="rts-btn btn__long secondary__bg secondary__color"
                                    >
                                        Get Started <i className="fa-regular fa-chevron-right" />
                                    </Link>
                                    <Link
                                        to="https://www.youtube.com/watch?v=tVbtTL_sJHI"
                                        className="popup-video video-btn"
                                    >
                                        <span className="icon">
                                            <i className="fa-sharp fa-solid fa-play" />
                                        </span>
                                        <span className="disc">Watch Video</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-5 col-md-10 offset-xl-1">
                            <div className="rts-hero-image">
                                <img
                                    src="assets/images/banner/banner-hero-five.png"
                                    width={635}
                                    height={640}
                                    alt=""
                                    className="big-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rts-hero-shape-area">
                    <img
                        className="shape-one"
                        src="assets/images/banner/banner__bg__shape__five.svg"
                        alt=""
                    />
                    <img
                        className="shape-two"
                        src="assets/images/banner/banner__bg__shape__six.svg"
                        alt=""
                    />
                    <img
                        className="shape-three"
                        src="assets/images/banner/banner__bg__shape__eight.svg"
                        alt=""
                    />
                    <img
                        className="shape-four"
                        src="assets/images/banner/banner__bg__shape__nine.svg"
                        alt=""
                    />
                    <img
                        className="shape-five"
                        src="assets/images/banner/banner__bg__shape__ten.svg"
                        alt=""
                    />
                </div>
            </section>

        </>
    )
}

export default HomeFiveBanner
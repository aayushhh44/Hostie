import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function HomeSevenBanner() {
    useEffect(() => {
		sal({
			threshold: 0.1,
			once: true,
		});
	}, []);
    return (
        <>
            <section className="rts-hero game-banner z-1">
                <div className="container">
                    <div className="row align-items-end position-relative">
                        <div className="col-lg-7">
                            <div className="rts-hero__content w-750">
                                <h6
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    <img src="assets/images/icon/game.svg" alt="" />
                                    30% Discount first month purchase
                                </h6>
                                <h1
                                    className="heading"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    Power Up with Our Premium Game Hosting Solutions{" "}
                                    <img src="assets/images/icon/game-4.svg" alt="" />
                                </h1>
                                <div
                                    className="rts-hero-two__content--btn sal-animate"
                                    data-sal="slide-down"
                                    data-sal-delay={500}
                                    data-sal-duration={800}
                                >
                                    <Link
                                        to="/pricing"
                                        className="rts-btn btn__long secondary__bg secondary__color"
                                    >
                                        get started
                                    </Link>
                                    <Link
                                        to="/pricing-two"
                                        className="rts-btn btn__long border__white white__color"
                                    >
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="rts-hero__images position-relative">
                                <div className="rts-hero-main">
                                    <div className="image-main ">
                                        <img
                                            className="main top-bottom2"
                                            src="assets/images/banner/banner__seven__image.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeSevenBanner
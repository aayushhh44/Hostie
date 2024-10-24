import React from 'react'
import { Link } from 'react-router-dom';
function HomeFlashSale() {
    return (
        <>
            <section className="rts-flash-sell">
                <div className="container">
                    <div className="rts-flash-sell__bg">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="rts-flash-sell__title">
                                    <h3 data-sal="slide-down" data-sal-delay={300} data-sal-duration={800}>
                                        Hosting Flash Sale
                                    </h3>
                                    <p data-sal="slide-down" data-sal-delay={400} data-sal-duration={800} >
                                        For a limited time, launch your website with incredible savings.
                                    </p>
                                    <Link data-sal="slide-down" data-sal-delay={500} data-sal-duration={800} to="#" className="primary__btn white__bg" >
                                        See Details
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8 p--0">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single__sell">
                                            <div className="single__sell--content">
                                                <div className="offer">for a limited Time</div>
                                                <div className="discount">67% Off</div>
                                                <span>hosting</span>
                                            </div>
                                            <div className="single__sell--image">
                                                <img src="assets/images/icon/cloud.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single__sell">
                                            <div className="single__sell--content">
                                                <div className="offer">for a limited Time</div>
                                                <div className="discount">90% Off</div>
                                                <span>hosting</span>
                                            </div>
                                            <div className="single__sell--image">
                                                <img src="assets/images/icon/domain.svg" alt="" />
                                            </div>
                                        </div>
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

export default HomeFlashSale
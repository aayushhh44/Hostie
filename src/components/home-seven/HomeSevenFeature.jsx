import React from 'react'

function HomeSevenFeature() {
    return (
        <>
            <div className="rts-feature section__padding">
                <div className="container">
                    <div className="row justify-content-md-center g-5">
                        <div className="col-lg-7 col-md-10">
                            <div className="feature__image">
                                <img src="assets/images/game/feature.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-10">
                            <div className="feature__content__box">
                                <h3 className="feature__content__box--title">
                                    Game Server Solution Powering Your Online Gaming Experience
                                </h3>
                                <div className="feature__content__box__list">
                                    <div className="feature__content__box__list__single">
                                        <div className="icon">
                                            <img src="assets/images/icon/feature-1.svg" alt="" />
                                        </div>
                                        <h4 className="content">High-Performance Hardware</h4>
                                    </div>
                                    <div className="feature__content__box__list__single">
                                        <div className="icon">
                                            <img src="assets/images/icon/feature-2.svg" alt="" />
                                        </div>
                                        <h4 className="content">Customization Options</h4>
                                    </div>
                                    <div className="feature__content__box__list__single">
                                        <div className="icon">
                                            <img src="assets/images/icon/feature-3.svg" alt="" />
                                        </div>
                                        <h4 className="content">24/7 Technical Support</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeSevenFeature
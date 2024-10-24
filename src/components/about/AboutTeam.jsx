import React from 'react'

function AboutTeam() {
    return (
        <>
            <section className="rts-team-area pt--120 pb--120">
                <div className="container">
                    <div className="rts-section-title-area">
                        <h2
                            className="section-title"
                            data-sal="slide-down"
                            data-sal-delay={200}
                            data-sal-duration={800}
                        >
                            Part of our team
                        </h2>
                        <p
                            className="desc w-450"
                            data-sal="slide-down"
                            data-sal-delay={300}
                            data-sal-duration={800}
                        >
                            Over the last 19 years, Site Ground has grown to more than A
                            considerable number of our people started working
                        </p>
                    </div>
                    <div className="section-inner">
                        <div className="row g-5">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="team-wrapper">
                                    <div className="image-area">
                                        <img src="assets/images/team/team-01.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Jhone Doe</h4>
                                        <p className="desc">CEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="team-wrapper">
                                    <div className="image-area">
                                        <img src="assets/images/team/team-02.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Peterson Jefer</h4>
                                        <p className="desc">Marketing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="team-wrapper">
                                    <div className="image-area">
                                        <img src="assets/images/team/team-03.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Machiel Anderson</h4>
                                        <p className="desc">Digital Markter</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="team-wrapper">
                                    <div className="image-area">
                                        <img src="assets/images/team/team-04.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Nikolay Todorov</h4>
                                        <p className="desc">Creative Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="team-wrapper">
                                    <div className="image-area">
                                        <img src="assets/images/team/team-05.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Masum Sakib</h4>
                                        <p className="desc">WordPress Dev</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="team-wrapper">
                                    <div className="image-area">
                                        <img src="assets/images/team/team-06.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Al Amin Bali</h4>
                                        <p className="desc">Designer</p>
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

export default AboutTeam
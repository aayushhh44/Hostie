import React from 'react'

function HomeNineContact() {
    return (
        <>
            <div className="rts-contact">
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
                                    Request a consultation.
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
                    {/* contact form */}
                    <div className="row justify-content-md-center align-items-center g-5">
                        <div className="col-lg-6 col-md-10">
                            <form action="#" className="contact__form">
                                <div className="row g-5">
                                    <div className="col-lg-6 col-md-6">
                                        <label htmlFor="fname" className="contact__form__label">
                                            First Name *
                                        </label>
                                        <input
                                            className="contact__form__input"
                                            type="text"
                                            placeholder="First Name"
                                            name="fname"
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <label htmlFor="lname" className="contact__form__label">
                                            Last Name *
                                        </label>
                                        <input
                                            className="contact__form__input"
                                            type="text"
                                            placeholder="Last Name"
                                            name="lname"
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <label htmlFor="email" className="contact__form__label">
                                            Email Address *
                                        </label>
                                        <input
                                            className="contact__form__input"
                                            type="email"
                                            placeholder="Enter your email"
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <label htmlFor="Subject" className="contact__form__label">
                                            Enter Your Subject
                                        </label>
                                        <input
                                            className="contact__form__input"
                                            type="text"
                                            placeholder="Enter your Subject"
                                            name="Subject"
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-12">
                                        <label htmlFor="msg" className="contact__form__label">
                                            Enter Your Message
                                        </label>
                                        <textarea
                                            className="contact__form__textarea"
                                            type="text"
                                            placeholder="Enter your Message"
                                            name="msg"
                                            required
                                            defaultValue={""}
                                        />
                                        <button type="submit" className="contact__form__submit mt--40">
                                            Send Your Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="map__area">
                                <iframe src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Reacthemes+(Reactheme)&t=&z=14&ie=UTF8&iwloc=B&output=embed" title="Map Description"> </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeNineContact
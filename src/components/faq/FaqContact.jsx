import React from 'react'

function FaqContact() {
    return (
        <>
            <section className="rts-contact-form bg-white no-bg border-bottom-light pb--120">
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
                                    <h1 className="contact-form__content--title">Ask a Question</h1>
                                    <p className="contact-form__content--description">
                                        Schedule a call today and one of our experts to help you decide
                                        which service is ideal for your business and budget.
                                    </p>
                                    <div className="contact__shape support-page">
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
                                <form className="form__content" method="post" action="mailer.php">
                                    <div className="form__control">
                                        <input
                                            type="text"
                                            className="input-form"
                                            name="name"
                                            id="name"
                                            placeholder="what is your name?"
                                            required
                                        />
                                        <input
                                            type="email"
                                            className="input-form"
                                            name="email"
                                            id="email"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </div>
                                    <div className="form__control">
                                        <input
                                            type="text"
                                            className="input-form"
                                            name="phone"
                                            id="phone"
                                            placeholder="Phone Number"
                                            required
                                        />
                                        <select name="select" id="select" className="input-form">
                                            <option value={1}>Select a state</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="India">India</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="Nepal">Nepal</option>
                                            <option value="Maldives">Maldives</option>
                                        </select>
                                    </div>
                                    <textarea
                                        name="message"
                                        id="message"
                                        cols={30}
                                        rows={10}
                                        placeholder="A brief description about your consultation"
                                        required
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
                </div>
            </section>

        </>
    )
}

export default FaqContact
import React from 'react'

function HomeFourNewsletter() {
    return (
        <>
            <div className="rts-newsletter">
                <div className="container">
                    <div className="row">
                        <div className="rts-newsletter__box">
                            <div className="rts-newsletter__box--content">
                                <h3 className="title">Sign up for web hosting today!</h3>
                                <form action="#" className="newsletter__form">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="btn__two secondary__bg secondary__color"
                                    >
                                        Subscribe{" "}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeFourNewsletter
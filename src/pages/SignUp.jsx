import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <>
            <div className="rts-sign-up-section">
                <div className="section-inner">
                    <div className="logo-area">
                        <Link to="/">
                            <img src="assets/images/logo/logo-4.svg" alt="" />
                        </Link>
                    </div>
                    <form action="#">
                        <h2 className="form-title">Sign up</h2>
                        <div className="form-inner">
                            <div className="single-wrapper">
                                <input type="text" placeholder="Full name" required />
                            </div>
                            <div className="single-wrapper">
                                <input type="email" placeholder="Your email" required />
                            </div>
                            <div className="single-wrapper">
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="single-wrapper">
                                <input type="password" placeholder="Re-enter password" required />
                            </div>
                            <div className="check">
                                <div className="check-box-area">
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">
                                        I read and accept all <Link to="#">terms of use..</Link>
                                    </label>
                                </div>
                            </div>
                            <div className="form-btn">
                                <button type="submit" className="primary__btn">
                                    Create an account
                                </button>
                            </div>
                        </div>
                        <p className="sign-in-option">
                            You already have an account? <Link to="/sign-in">Sign in</Link>
                        </p>
                    </form>
                </div>
                <div className="copyright-area">
                    <p>Copyright 2023. All Rights Reserved.</p>
                </div>
            </div>

        </>
    )
}

export default SignUp
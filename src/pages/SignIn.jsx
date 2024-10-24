import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
    return (
        <div>
            <div className="rts-sign-up-section">
                <div className="section-inner">
                    <div className="logo-area">
                        <Link to="/">
                            <img src="assets/images/logo/logo-4.svg" alt="" />
                        </Link>
                    </div>
                    <form action="#">
                        <h2 className="form-title">Sign In</h2>
                        <div className="form-inner">
                            <div className="single-wrapper">
                                <input type="email" placeholder="Your email" required />
                            </div>
                            <div className="single-wrapper">
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="check">
                                <div className="check-box-area">
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Remember me</label>
                                </div>
                                <Link to="#" className="forgot-password">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="form-btn">
                                <button type="submit" className="primary__btn">
                                    Log In
                                </button>
                            </div>
                        </div>
                        <p className="sign-in-option">
                            Have no account yet? <Link to="/sign-up">Sign Up</Link>
                        </p>
                    </form>
                </div>
                <div className="copyright-area">
                    <p>Copyright 2023. All Rights Reserved.</p>
                </div>
            </div>

        </div>
    )
}

export default SignIn
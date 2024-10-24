import React from 'react'
import { Link } from 'react-router-dom'

function TechnologyPerfomance() {
    return (
        <>
            <section className="rts-performance section__padding ">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-6 col-lg-5">
                            <div className="performance__image">
                                <img src="assets/images/feature/performance.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="performance__text w-480  mx-0 mx-lg-auto ml--90">
                                <h2 className="fw-bold">High-Performance Platform</h2>
                                <p className="description">
                                    We launched geographically distributed backups that minimize the
                                    risk of date loss and allows for fast data recovery even in case of
                                    a serious incident that may affect a whole.
                                </p>
                                <Link
                                    to="/wordpress-hosting"
                                    className="rts-btn rts-btn-secondary hover-white"
                                >
                                    get started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TechnologyPerfomance
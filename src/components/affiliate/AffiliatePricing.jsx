import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AffiliatePricing() {
    const [activeTab, setActiveTab] = useState("sales");

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <>
            <section className="rts-pricing-five inner">
                <div className="container">
                    <div className="section-inner">
                        <div className="pricing-list">
                            <div className="row g-30">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="pricing-wrapper">
                                        <div className="icon">
                                            <img src="assets/images/affiliate/icon-1.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Earn at Your Pace</h4>
                                            <p className="description">
                                                SUPER affiliate? Our customized affiliate commission
                                            </p>
                                        </div>
                                        <div className="pricing-shape-area">
                                            <img
                                                src="assets/images/pricing/pricing-bg-shape.svg"
                                                alt=""
                                                className="one"
                                            />
                                            <img
                                                src="assets/images/pricing/pricing-shape-01.svg"
                                                alt=""
                                                className="two"
                                            />
                                            <img
                                                src="assets/images/pricing/pricing-shape-02.svg"
                                                alt=""
                                                className="three"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="pricing-wrapper">
                                        <div className="icon">
                                            <img src="assets/images/affiliate/icon-2.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">WordPress Hosting</h4>
                                            <p className="description">
                                                Leverage Cloud ways to your passive income with lifetime
                                            </p>
                                        </div>
                                        <div className="pricing-shape-area">
                                            <img
                                                src="assets/images/pricing/pricing-bg-shape.svg"
                                                alt=""
                                                className="one"
                                            />
                                            <img
                                                src="assets/images/pricing/pricing-shape-01.svg"
                                                alt=""
                                                className="two"
                                            />
                                            <img
                                                src="assets/images/pricing/pricing-shape-02.svg"
                                                alt=""
                                                className="three"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="pricing-wrapper">
                                        <div className="icon">
                                            <img src="assets/images/affiliate/icon-3.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Low Customer Churn</h4>
                                            <p className="description">
                                                Leverage Cloud ways to your passive income with lifetime
                                            </p>
                                        </div>
                                        <div className="pricing-shape-area">
                                            <img
                                                src="assets/images/pricing/pricing-bg-shape.svg"
                                                alt=""
                                                className="one"
                                            />
                                            <img
                                                src="assets/images/pricing/pricing-shape-01.svg"
                                                alt=""
                                                className="two"
                                            />
                                            <img
                                                src="assets/images/pricing/pricing-shape-02.svg"
                                                alt=""
                                                className="three"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="pricing-wrapper">
                                        <div className="icon">
                                            <img src="assets/images/affiliate/icon-4.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Affiliate Support</h4>
                                            <p className="description">
                                                Dedicated account managers and resources
                                            </p>
                                        </div>
                                        <div className="pricing-shape-area">
                                            <img
                                                src="assets/images/pricing/pricing-bg-shape.svg"
                                                alt=""
                                                className="one"
                                            />
                                            <img
                                                src="assets/images/pricing/pricing-shape-01.svg"
                                                alt=""
                                                className="two"
                                            />
                                            <img
                                                src="assets/images/pricing/pricing-shape-02.svg"
                                                alt=""
                                                className="three"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt--90 g-30">
                        <div className="col-lg-5">
                            <div className="commision__text">
                                <h3 className="title">
                                    High Commissions with Weekly Payouts Thresholds
                                </h3>
                                <p>
                                    Join our hosting affiliate program and enjoy high affiliate
                                    earnings, fast payouts, and top conversion rates.
                                </p>
                                <Link
                                    to="/pricing"
                                    className="rts-btn btn__long primary__bg white__color"
                                >
                                    View Plan <i className="fa-regular fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="commision-calculation">
                                <div className="commision-tab mb--50">
                                    <div className={`tab__button tab__btn ${activeTab === 'sales' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('sales')}
                                    >
                                        Sales
                                    </div>
                                    <div className={`tab__button tab__btn ${activeTab === 'monthly-2' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('monthly-2')}
                                    >
                                        Monthly Payment
                                    </div>
                                    <div className={`tab__button tab__btn ${activeTab === 'slab' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('slab')}
                                    >
                                        Slab
                                    </div>
                                    <div className={`tab__button tab__btn ${activeTab === 'hybrid' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('hybrid')}
                                    >
                                        Hybrid
                                    </div>
                                </div>
                                <div className={`commision-content tab__content ${activeTab === "sales" ? "open" : ""}`}
                                    id="sales"
                                    style={{ display: activeTab === "sales" ? "block" : "none" }}>
                                    <div className="commision-type">
                                        <div className="item">1-5 Sales /mo $50 /sale</div>
                                        <div className="item">1-5 Sales /mo $50 /sale</div>
                                        <div className="item">6-10 Sales /mo $75 /sale</div>
                                        <div className="item">6-10 Sales /mo $75 /sale</div>
                                        <div className="item">6-10 Sales /mo $75 /sale</div>
                                        <div className="item">1-5 Sales /mo $50 /sale</div>
                                    </div>
                                </div>
                                <div className={`commision-content tab__content ${activeTab === "monthly-2" ? "open" : ""}`}
                                    id="monthly-2"
                                    style={{ display: activeTab === "monthly-2" ? "block" : "none" }}>
                                    <div className="commision-type">
                                        <div className="item">1-5 Sales /mo $50 /sale</div>
                                        <div className="item">1-5 Sales /mo $50 /sale</div>
                                        <div className="item">6-10 Sales /mo $75 /sale</div>
                                        <div className="item">6-10 Sales /mo $75 /sale</div>
                                        <div className="item">6-10 Sales /mo $75 /sale</div>
                                        <div className="item">1-5 Sales /mo $50 /sale</div>
                                    </div>
                                </div>
                                <div className={`commision-content tab__content ${activeTab === "slab" ? "open" : ""}`}
                                    id="slab"
                                    style={{ display: activeTab === "slab" ? "block" : "none" }}>
                                    <div className="commision-type">
                                        <div className="item">1-5 Sales /mo $50 /sale</div>
                                        <div className="item">1-5 Sales /mo $50 /sale</div>
                                        <div className="item">6-10 Sales /mo $75 /sale</div>
                                        <div className="item">6-10 Sales /mo $75 /sale</div>
                                        <div className="item">6-10 Sales /mo $75 /sale</div>
                                        <div className="item">1-5 Sales /mo $50 /sale</div>
                                    </div>
                                </div>
                                <div className={`commision-content tab__content ${activeTab === "hybrid" ? "open" : ""}`}
                                    id="hybrid"
                                    style={{ display: activeTab === "hybrid" ? "block" : "none" }}>
                                    <div className="commision-type">
                                        <div className="item">1-5 Sales /mo $50 /sale</div>
                                        <div className="item">1-5 Sales /mo $50 /sale</div>
                                        <div className="item">6-10 Sales /mo $75 /sale</div>
                                        <div className="item">6-10 Sales /mo $75 /sale</div>
                                        <div className="item">6-10 Sales /mo $75 /sale</div>
                                        <div className="item">1-5 Sales /mo $50 /sale</div>
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

export default AffiliatePricing
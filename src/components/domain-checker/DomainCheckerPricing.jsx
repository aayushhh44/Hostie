import React, {useState} from 'react'

function DomainCheckerPricing() {
    const [activeTab, setActiveTab] = useState("all");

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <>
            <section className="rts-domain-pricing-area area-2 pt--120 pb--120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-title-area w-550">
                            <h2 className="section-title">Top Domains Price List</h2>
                            <p className="desc">
                                Keep in mind that TLD prices can change over time, and different
                                registrars may offer different deals and packages
                            </p>
                        </div>
                    </div>
                    <div className="section-inner">
                        <div className="pricing-table-area">
                            <div className="rts-pricing-plan__tab pricing__tab">
                                <div className="tab__button">
                                    <div className="tab__button__item">
                                        <button className={`tab__btn ${activeTab === 'all' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('all')}>
                                            All
                                        </button>
                                        <button className={`tab__btn ${activeTab === 'sale' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('sale')}>
                                            Sale
                                        </button>
                                        <button className={`tab__btn ${activeTab === 'newest' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('newest')}>
                                            Newest
                                        </button>
                                        <button className={`tab__btn ${activeTab === 'popular' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('popular')}>
                                            Popular
                                        </button>
                                        <button className={`tab__btn ${activeTab === 'geographic' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('geographic')}>
                                            Geographic
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* PRICING PLAN */}
                            <div className={`tab__content ${activeTab === "all" ? "open" : ""}`}
                        id="all"
                        style={{ display: activeTab === "all" ? "block" : "none" }}>
                                <table className="table table-hover table-responsive">
                                    <thead className="heading__bg">
                                        <tr>
                                            <th className="cell">TLD</th>
                                            <th className="cell">Register</th>
                                            <th className="cell">Renew</th>
                                            <th className="cell">Transfer</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table__content">
                                        <tr>
                                            <td className="package">.com</td>
                                            <td className="process">$6.99</td>
                                            <td className="ram">$17.99</td>
                                            <td className="storage">$7.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.net</td>
                                            <td className="process">$8.99</td>
                                            <td className="ram">$19.99</td>
                                            <td className="storage">$9.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.online</td>
                                            <td className="process">$5.99</td>
                                            <td className="ram">$12.99</td>
                                            <td className="storage">$6.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.shop</td>
                                            <td className="process">$9.99</td>
                                            <td className="ram">$20.99</td>
                                            <td className="storage">$10.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.xyz</td>
                                            <td className="process">$4.99</td>
                                            <td className="ram">$10.99</td>
                                            <td className="storage">$5.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.club</td>
                                            <td className="process">$6.99</td>
                                            <td className="ram">$17.99</td>
                                            <td className="storage">$7.99</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* PRICING PLAN */}
                            <div className={`tab__content ${activeTab === "sale" ? "open" : ""}`}
                        id="sale"
                        style={{ display: activeTab === "sale" ? "block" : "none" }}>
                                <table className="table table-hover table-responsive">
                                    <thead className="heading__bg">
                                        <tr>
                                            <th className="cell">TLD</th>
                                            <th className="cell">Register</th>
                                            <th className="cell">Renew</th>
                                            <th className="cell">Transfer</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table__content">
                                        <tr>
                                            <td className="package">.com</td>
                                            <td className="process">$6.99</td>
                                            <td className="ram">$17.99</td>
                                            <td className="storage">$7.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.net</td>
                                            <td className="process">$8.99</td>
                                            <td className="ram">$19.99</td>
                                            <td className="storage">$9.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.online</td>
                                            <td className="process">$5.99</td>
                                            <td className="ram">$12.99</td>
                                            <td className="storage">$6.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.shop</td>
                                            <td className="process">$9.99</td>
                                            <td className="ram">$20.99</td>
                                            <td className="storage">$10.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.xyz</td>
                                            <td className="process">$4.99</td>
                                            <td className="ram">$10.99</td>
                                            <td className="storage">$5.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.club</td>
                                            <td className="process">$6.99</td>
                                            <td className="ram">$17.99</td>
                                            <td className="storage">$7.99</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* PRICING PLAN */}
                            <div className={`tab__content ${activeTab === "newest" ? "open" : ""}`}
                        id="newest"
                        style={{ display: activeTab === "newest" ? "block" : "none" }}>
                                <table className="table table-hover table-responsive">
                                    <thead className="heading__bg">
                                        <tr>
                                            <th className="cell">TLD</th>
                                            <th className="cell">Register</th>
                                            <th className="cell">Renew</th>
                                            <th className="cell">Transfer</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table__content">
                                        <tr>
                                            <td className="package">.com</td>
                                            <td className="process">$6.99</td>
                                            <td className="ram">$17.99</td>
                                            <td className="storage">$7.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.net</td>
                                            <td className="process">$8.99</td>
                                            <td className="ram">$19.99</td>
                                            <td className="storage">$9.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.online</td>
                                            <td className="process">$5.99</td>
                                            <td className="ram">$12.99</td>
                                            <td className="storage">$6.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.shop</td>
                                            <td className="process">$9.99</td>
                                            <td className="ram">$20.99</td>
                                            <td className="storage">$10.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.xyz</td>
                                            <td className="process">$4.99</td>
                                            <td className="ram">$10.99</td>
                                            <td className="storage">$5.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.club</td>
                                            <td className="process">$6.99</td>
                                            <td className="ram">$17.99</td>
                                            <td className="storage">$7.99</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* PRICING PLAN */}
                            <div className={`tab__content ${activeTab === "popular" ? "open" : ""}`}
                        id="popular"
                        style={{ display: activeTab === "popular" ? "block" : "none" }}>
                                <table className="table table-hover table-responsive">
                                    <thead className="heading__bg">
                                        <tr>
                                            <th className="cell">TLD</th>
                                            <th className="cell">Register</th>
                                            <th className="cell">Renew</th>
                                            <th className="cell">Transfer</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table__content">
                                        <tr>
                                            <td className="package">.com</td>
                                            <td className="process">$6.99</td>
                                            <td className="ram">$17.99</td>
                                            <td className="storage">$7.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.net</td>
                                            <td className="process">$8.99</td>
                                            <td className="ram">$19.99</td>
                                            <td className="storage">$9.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.online</td>
                                            <td className="process">$5.99</td>
                                            <td className="ram">$12.99</td>
                                            <td className="storage">$6.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.shop</td>
                                            <td className="process">$9.99</td>
                                            <td className="ram">$20.99</td>
                                            <td className="storage">$10.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.xyz</td>
                                            <td className="process">$4.99</td>
                                            <td className="ram">$10.99</td>
                                            <td className="storage">$5.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.club</td>
                                            <td className="process">$6.99</td>
                                            <td className="ram">$17.99</td>
                                            <td className="storage">$7.99</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* PRICING PLAN */}
                            <div className={`tab__content ${activeTab === "geographic" ? "open" : ""}`}
                        id="geographic"
                        style={{ display: activeTab === "geographic" ? "block" : "none" }}>
                                <table className="table table-hover table-responsive">
                                    <thead className="heading__bg">
                                        <tr>
                                            <th className="cell">TLD</th>
                                            <th className="cell">Register</th>
                                            <th className="cell">Renew</th>
                                            <th className="cell">Transfer</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table__content">
                                        <tr>
                                            <td className="package">.com</td>
                                            <td className="process">$6.99</td>
                                            <td className="ram">$17.99</td>
                                            <td className="storage">$7.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.net</td>
                                            <td className="process">$8.99</td>
                                            <td className="ram">$19.99</td>
                                            <td className="storage">$9.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.online</td>
                                            <td className="process">$5.99</td>
                                            <td className="ram">$12.99</td>
                                            <td className="storage">$6.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.shop</td>
                                            <td className="process">$9.99</td>
                                            <td className="ram">$20.99</td>
                                            <td className="storage">$10.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.xyz</td>
                                            <td className="process">$4.99</td>
                                            <td className="ram">$10.99</td>
                                            <td className="storage">$5.99</td>
                                        </tr>
                                        <tr>
                                            <td className="package">.club</td>
                                            <td className="process">$6.99</td>
                                            <td className="ram">$17.99</td>
                                            <td className="storage">$7.99</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default DomainCheckerPricing
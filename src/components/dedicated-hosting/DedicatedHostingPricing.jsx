import React, { useState } from 'react'
function DedicatedHostingPricing() {
    const [activeTab, setActiveTab] = useState("monthly");

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <>
            <div className="rts-pricing-plan table-pricing pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="rts-section w-640 text-center">
                            <h2 className="rts-section__title">
                                Compare Hostie Dedicated Hosting Plans
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-5 col-md-6">
                                <div className="rts-pricing-plan__tab pricing__tab">
                                    <div className="tab__button">
                                        <div className="tab__button__item">
                                            <button className={`tab__btn ${activeTab === 'monthly' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('monthly')}>
                                                monthly
                                            </button>
                                            <button className={`tab__btn ${activeTab === 'yearly' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('yearly')}>
                                                yearly
                                            </button>
                                        </div>
                                    </div>
                                    <div className="discount">
                                        <span className="line">
                                            <img
                                                src="assets/images/pricing/offer__vactor.svg"
                                                height={20}
                                                width={85}
                                                alt=""
                                            />
                                        </span>
                                        <p>20% save</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* PRICING PLAN */}
                        <div className={`tab__content ${activeTab === "monthly" ? "open" : ""}`}
                        id="monthly"
                        style={{ display: activeTab === "monthly" ? "block" : "none" }}>
                            <table className="table">
                                <thead className="heading__bg">
                                    <tr>
                                        <th className="cell">Value</th>
                                        <th className="cell">Core</th>
                                        <th className="cell">RAM</th>
                                        <th className="cell">Storage</th>
                                        <th className="cell">Monthly Price</th>
                                        <th className="cell" />
                                    </tr>
                                </thead>
                                <tbody className="table__content">
                                    <tr>
                                        <td className="package">Standard 4</td>
                                        <td className="process">Intel Xeon 4-Core 8-Thread</td>
                                        <td className="ram">4 GB</td>
                                        <td className="storage">1 TB HDD</td>
                                        <td className="price">$167.00/mo</td>
                                        <td>
                                            <div className="btn__two primary__btn">sign up</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="package">Standard 4</td>
                                        <td className="process">Intel Xeon 4-Core 8-Thread</td>
                                        <td className="ram">8 GB</td>
                                        <td className="storage">1 TB HDD</td>
                                        <td className="price">$199.00/mo</td>
                                        <td>
                                            <div className="btn__two primary__btn">sign up</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="package">Standard 8</td>
                                        <td className="process">Intel Xeon 4-Core 8-Thread</td>
                                        <td className="ram">16 GB</td>
                                        <td className="storage">1 TB HDD</td>
                                        <td className="price">$299.00/mo</td>
                                        <td>
                                            <div className="btn__two primary__btn">sign up</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="package">Standard 16</td>
                                        <td className="process">Intel Xeon 12-Core 24-Thread</td>
                                        <td className="ram">16 GB</td>
                                        <td className="storage">2 TB HDD</td>
                                        <td className="price">$399.00/mo</td>
                                        <td>
                                            <div className="btn__two primary__btn">sign up</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="package">Enhanced 32</td>
                                        <td className="process">Intel Xeon 12-Core 24-Thread</td>
                                        <td className="ram">32 GB</td>
                                        <td className="storage">2 TB HDD</td>
                                        <td className="price">$499.00/mo</td>
                                        <td>
                                            <div className="btn__two primary__btn">sign up</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="package">Enhanced 64</td>
                                        <td className="process">Intel Xeon 12-Core 24-Thread</td>
                                        <td className="ram">64 GB</td>
                                        <td className="storage">2 TB HDD</td>
                                        <td className="price">$599.00/mo</td>
                                        <td>
                                            <div className="btn__two primary__btn">sign up</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="package">Enhanced SSD 16</td>
                                        <td className="process">Intel Xeon 12-Core 24-Thread</td>
                                        <td className="ram">16 GB</td>
                                        <td className="storage">240 GB SSD</td>
                                        <td className="price">$299.00/mo</td>
                                        <td>
                                            <div className="btn__two primary__btn">sign up</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="package">Enhanced SSD 64</td>
                                        <td className="process">Intel Xeon 12-Core 24-Thread</td>
                                        <td className="ram">64 GB</td>
                                        <td className="storage">240 GB SSD</td>
                                        <td className="price">$399.00/mo</td>
                                        <td>
                                            <div className="btn__two primary__btn">sign up</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* PRICING PLAN */}
                        <div className={`tab__content ${activeTab === "yearly" ? "open" : ""}`}
                        id="yearly"
                        style={{ display: activeTab === "yearly" ? "block" : "none" }}>
                            <table className="table">
                                <thead className="heading__bg">
                                    <tr>
                                        <th className="cell">Value</th>
                                        <th className="cell">Core</th>
                                        <th className="cell">RAM</th>
                                        <th className="cell">Storage</th>
                                        <th className="cell">Monthly Price</th>
                                        <th className="cell" />
                                    </tr>
                                </thead>
                                <tbody className="table__content">
                                    <tr>
                                        <td className="package">Standard 4</td>
                                        <td className="process">Intel Xeon 4-Core 8-Thread</td>
                                        <td className="ram">4 GB</td>
                                        <td className="storage">1 TB HDD</td>
                                        <td className="price">$367.00/yr</td>
                                        <td>
                                            <div className="btn__two primary__btn">sign up</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="package">Standard 4</td>
                                        <td className="process">Intel Xeon 4-Core 8-Thread</td>
                                        <td className="ram">8 GB</td>
                                        <td className="storage">1 TB HDD</td>
                                        <td className="price">$499.00/yr</td>
                                        <td>
                                            <div className="btn__two primary__btn">sign up</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="package">Standard 8</td>
                                        <td className="process">Intel Xeon 4-Core 8-Thread</td>
                                        <td className="ram">16 GB</td>
                                        <td className="storage">1 TB HDD</td>
                                        <td className="price">$599.00/yr</td>
                                        <td>
                                            <div className="btn__two primary__btn">sign up</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="package">Standard 16</td>
                                        <td className="process">Intel Xeon 12-Core 24-Thread</td>
                                        <td className="ram">16 GB</td>
                                        <td className="storage">2 TB HDD</td>
                                        <td className="price">$499.00/yr</td>
                                        <td>
                                            <div className="btn__two primary__btn">sign up</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="package">Enhanced 32</td>
                                        <td className="process">Intel Xeon 12-Core 24-Thread</td>
                                        <td className="ram">32 GB</td>
                                        <td className="storage">2 TB HDD</td>
                                        <td className="price">$699.00/yr</td>
                                        <td>
                                            <div className="btn__two primary__btn">sign up</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="package">Enhanced 64</td>
                                        <td className="process">Intel Xeon 12-Core 24-Thread</td>
                                        <td className="ram">64 GB</td>
                                        <td className="storage">2 TB HDD</td>
                                        <td className="price">$899.00/yr</td>
                                        <td>
                                            <div className="btn__two primary__btn">sign up</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="package">Enhanced SSD 16</td>
                                        <td className="process">Intel Xeon 12-Core 24-Thread</td>
                                        <td className="ram">16 GB</td>
                                        <td className="storage">240 GB SSD</td>
                                        <td className="price">$499.00/yr</td>
                                        <td>
                                            <div className="btn__two primary__btn">sign up</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="package">Enhanced SSD 64</td>
                                        <td className="process">Intel Xeon 12-Core 24-Thread</td>
                                        <td className="ram">64 GB</td>
                                        <td className="storage">240 GB SSD</td>
                                        <td className="price">$599.00/yr</td>
                                        <td>
                                            <div className="btn__two primary__btn">sign up</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DedicatedHostingPricing
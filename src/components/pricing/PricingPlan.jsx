import React, {useState} from 'react'

function PricingPlan() {
    const [activeTab, setActiveTab] = useState("monthly");

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <>
            <div className="rts-pricing-plan pricing-comparison alice__blue section__padding">
                <div className="container">
                    <div className="row">
                        <div className="row justify-content-center">
                            <h4 className="title fw-bold mb--25">Feature</h4>
                            <div className="rts-pricing-plan__tab pricing__tab">
                                <div className="tab__button">
                                    <div className="tab__button__item">
                                        <button className={`tab__btn ${activeTab === 'monthly' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('monthly')}
                                        >
                                            monthly
                                        </button>
                                        <button className={`tab__btn ${activeTab === 'yearly' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('yearly')}
                                        >
                                            yearly
                                        </button>
                                    </div>
                                </div>
                                <div className="discount">
                                    <p>20% save</p>
                                </div>
                            </div>
                        </div>
                        {/* PRICING PLAN */}
                        <div className="col-lg-12">
                            <div className={`tab__content ${activeTab === "monthly" ? "open" : ""}`}
                                id="monthly"
                                style={{ display: activeTab === "monthly" ? "block" : "none" }}>
                                <table className="table table-hover table-responsive">
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
                                <div className="additional-content">
                                    <div className="plan-extra">
                                        <p className="text-capitalize text-center font-small">
                                            all plan come with
                                        </p>
                                    </div>
                                </div>
                                <table className="table table-hover table-responsive table-bottom">
                                    <tbody className="table__content">
                                        <tr>
                                            <td className="package">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 300 Websites
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="process">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Bandwidth
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="ram">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Bandwidth
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="storage">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Bandwidth
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="package">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Free Domain ($9.99
                                                        value)
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="process">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="ram">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="storage">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="package">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 24/7/365 Support
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="process">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 250 GB NVMe Storage
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="ram">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 250 GB NVMe Storage
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="storage">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 250 GB NVMe Storage
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="package">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="process">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="ram">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="storage">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* PRICING PLAN */}
                        <div className="col-lg-12">
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
                                <div className="additional-content">
                                    <div className="plan-extra">
                                        <p className="text-capitalize text-center font-small">
                                            all plan come with
                                        </p>
                                    </div>
                                </div>
                                <table className="table table-hover table-responsive table-bottom">
                                    <tbody className="table__content">
                                        <tr>
                                            <td className="package">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 300 Websites
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="process">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Bandwidth
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="ram">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Bandwidth
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="storage">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Bandwidth
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="package">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Free Domain ($9.99
                                                        value)
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="process">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="ram">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="storage">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="package">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 24/7/365 Support
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="process">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 250 GB NVMe Storage
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="ram">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 250 GB NVMe Storage
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="storage">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 250 GB NVMe Storage
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="package">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="process">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="ram">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="storage">
                                                <span className="content">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our Unlimited Free SSL solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PricingPlan
import React, {useState} from 'react'

function VpsHostingPerformance() {
    const [activeTab, setActiveTab] = useState("nginx");

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <>
            <div className="rts-vps-performance pt--120">
                <div className="container">
                    <div className="row align-items-center gy-30">
                        <div className="col-lg-4 col-xl-5 col-md-12 d-lg-block d-md-flex gap-md-3 justify-content-md-center">
                            <div className="rts-section-content">
                                <h2
                                    className="title"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    Expect Performance Get Hostie VPS
                                </h2>
                                <p
                                    className="description mb-5"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    Each virtual server hosting plan allocates resources that only your
                                    website can use. This equals unrivaled power, low latency and high
                                    performance.
                                </p>
                            </div>
                            <div
                                className="rts-performance-tab"
                                data-sal="slide-down"
                                data-sal-delay={200}
                                data-sal-duration={800}
                            >
                                <div className="single-tab">
                                    <button className={`tab__button tab__btn ${activeTab === 'nginx' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('nginx')}
                                    >
                                        Apache or Nginx <i className="fa-regular fa-arrow-right" />
                                    </button>
                                </div>
                                <div className="single-tab">
                                    <button className={`tab__button tab__btn ${activeTab === 'sftp' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('sftp')}>
                                        Unlimited SFTP Users <i className="fa-regular fa-arrow-right" />
                                    </button>
                                </div>
                                <div className="single-tab">
                                    <button className={`tab__button tab__btn ${activeTab === 'unlimited' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('unlimited')}>
                                        Unlimited SFTP Users <i className="fa-regular fa-arrow-right" />
                                    </button>
                                </div>
                                <div className="single-tab">
                                    <button className={`tab__button tab__btn ${activeTab === 'ssh' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('ssh')}>
                                        Secure Shell (SSH) Access{" "}
                                        <i className="fa-regular fa-arrow-right" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-xl-7 col-md-12 d-md-flex justify-content-md-center">
                            <div className= {`performance-tab-content tab__content ${activeTab === "nginx" ? "open" : ""}`}
                            id="nginx"
                            style={{ display: activeTab === "nginx" ? "block" : "none" }}
                            >
                                <div className="image-one">
                                    <img
                                        src="assets/images/feature/vps/vps-small.png"
                                        alt=""
                                        height={545}
                                        width={307}
                                    />
                                </div>
                                <div className="image-two">
                                    <img
                                        src="assets/images/feature/vps/vps-big.png"
                                        alt=""
                                        height={545}
                                        width={420}
                                    />
                                </div>
                            </div>
                            <div className={`performance-tab-content tab__content ${activeTab === "sftp" ? "open" : ""}`}
                            id="sftp"
                            style={{ display: activeTab === "sftp" ? "block" : "none" }}>
                                <div className="image-one">
                                    <img
                                        src="assets/images/feature/vps/vps-small.png"
                                        alt=""
                                        height={545}
                                        width={307}
                                    />
                                </div>
                                <div className="image-two">
                                    <img
                                        src="assets/images/feature/vps/vps-big.png"
                                        alt=""
                                        height={545}
                                        width={420}
                                    />
                                </div>
                            </div>
                            <div className={`performance-tab-content tab__content ${activeTab === "unlimited" ? "open" : ""}`}
                            id="unlimited"
                            style={{ display: activeTab === "unlimited" ? "block" : "none" }}>
                                <div className="image-one">
                                    <img
                                        src="assets/images/feature/vps/vps-small.png"
                                        alt=""
                                        height={545}
                                        width={307}
                                    />
                                </div>
                                <div className="image-two">
                                    <img
                                        src="assets/images/feature/vps/vps-big.png"
                                        alt=""
                                        height={545}
                                        width={420}
                                    />
                                </div>
                            </div>
                            <div className={`performance-tab-content tab__content ${activeTab === "ssh" ? "open" : ""}`}
                            id="ssh"
                            style={{ display: activeTab === "ssh" ? "block" : "none" }}>
                                <div className="image-one">
                                    <img
                                        src="assets/images/feature/vps/vps-small.png"
                                        alt=""
                                        height={545}
                                        width={307}
                                    />
                                </div>
                                <div className="image-two">
                                    <img
                                        src="assets/images/feature/vps/vps-big.png"
                                        alt=""
                                        height={545}
                                        width={420}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default VpsHostingPerformance
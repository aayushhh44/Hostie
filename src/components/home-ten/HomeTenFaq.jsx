import React, {useState} from 'react'

function HomeTenFaq() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <div className="rts-hosting-faq section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="rts-section text-center">
                                <h2
                                    className="rts-section__title mb-0"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    MERN Hosting FAQ
                                </h2>
                            </div>
                            <div
                                className="rts-faq__accordion"
                                data-sal="slide-down"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
                                <div className="accordion accordion-flush" id="rts-accordion">
                                    <div className={`accordion-item ${activeIndex === 0 ? "active" : ""}`}
                                        onClick={() => handleToggle(0)}>
                                        <div className="accordion-header" id="one">
                                            <h4
                                                className="accordion-button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#item__one"
                                                
                                                aria-controls="item__one"
                                            >
                                                Do I need specialized hosting for MERN applications?
                                            </h4>
                                        </div>
                                        <div
                                            id="item__one"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="one"
                                            data-bs-parent="#rts-accordion"
                                        >
                                            <div className="accordion-body">
                                                While it's possible to host MERN applications on generic
                                                hosting platforms, specialized MERN hosting offers advantages
                                                such as pre-configured environments, streamlined deployment
                                                processes, and support for specific requirements of MERN
                                                technologies.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}
                                        onClick={() => handleToggle(1)}>
                                        <div className="accordion-header" id="two">
                                            <h4
                                                className="accordion-button collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#item__two"
                                                
                                                aria-controls="item__two"
                                            >
                                                What are the key components of MERN hosting?
                                            </h4>
                                        </div>
                                        <div
                                            id="item__two"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="two"
                                            data-bs-parent="#rts-accordion"
                                        >
                                            <div className="accordion-body">
                                                The key components of MERN hosting typically include:
                                                <ul>
                                                    <li>
                                                        Server infrastructure capable of running Node.js
                                                        applications.
                                                    </li>
                                                    <li>Support for MongoDB databases.</li>
                                                    <li>
                                                        Integration with deployment tools for React.js
                                                        applications.
                                                    </li>
                                                    <li>
                                                        Features like load balancing, auto-scaling, and
                                                        containerization for optimal performance and scalability.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-item ${activeIndex === 2 ? "active" : ""}`}
                                        onClick={() => handleToggle(2)}>
                                        <div className="accordion-header" id="three">
                                            <h4
                                                className="accordion-button collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#item__three"
                                                
                                                aria-controls="item__three"
                                            >
                                                Do I need specialized hosting for MERN applications?
                                            </h4>
                                        </div>
                                        <div
                                            id="item__three"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="three"
                                            data-bs-parent="#rts-accordion"
                                        >
                                            <div className="accordion-body">
                                                While it's possible to host MERN applications on generic
                                                hosting platforms, specialized MERN hosting offers advantages
                                                such as pre-configured environments, streamlined deployment
                                                processes, and support for specific requirements of MERN
                                                technologies.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-item ${activeIndex === 3 ? "active" : ""}`}
                                        onClick={() => handleToggle(3)}>
                                        <div className="accordion-header" id="four">
                                            <h4
                                                className="accordion-button collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#item__four"
                                                
                                                aria-controls="item__four"
                                            >
                                                What are the advantages of MERN hosting?
                                            </h4>
                                        </div>
                                        <div
                                            id="item__four"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="four"
                                            data-bs-parent="#rts-accordion"
                                        >
                                            <div className="accordion-body">
                                                Advantages of MERN hosting include:
                                                <ul>
                                                    <li>
                                                        Simplified deployment processes tailored to MERN
                                                        applications.
                                                    </li>
                                                    <li>
                                                        Optimized performance and scalability for Node.js and
                                                        MongoDB.
                                                    </li>
                                                    <li>Integrated development tools and workflows.</li>
                                                    <li>
                                                        Dedicated support for troubleshooting MERN-specific
                                                        issues.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-item ${activeIndex === 4 ? "active" : ""}`}
                                        onClick={() => handleToggle(4)}>
                                        <div className="accordion-header" id="five">
                                            <h4
                                                className="accordion-button collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#item__five"
                                                
                                                aria-controls="item__four"
                                            >
                                                What deployment options are available for MERN hosting?
                                            </h4>
                                        </div>
                                        <div
                                            id="item__five"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="five"
                                            data-bs-parent="#rts-accordion"
                                        >
                                            <div className="accordion-body">
                                                MERN hosting providers typically offer various deployment
                                                options, including:
                                                <ul>
                                                    <li> Manual deployment via SSH or FTP.</li>
                                                    <li>
                                                        {" "}
                                                        Integration with version control systems like Git for
                                                        continuous integration and deployment (CI/CD).
                                                    </li>
                                                    <li>
                                                        Docker and Kubernetes support for containerized
                                                        deployments.
                                                    </li>
                                                    <li>
                                                        One-click deployment through platform-specific tools and
                                                        interfaces.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeTenFaq
import React, {useState} from 'react'

function HomeSevenFaq() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <div className="rts-hosting-faq game-faq pt--120">
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
                                    Frequently asked questions
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
                                        <div className="accordion-header" id="two">
                                            <h4
                                                className="accordion-button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#item__two"
                                                aria-controls="item__two"
                                            >
                                                How does domain registration work?
                                            </h4>
                                        </div>
                                        <div
                                            id="item__two"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="two"
                                            data-bs-parent="#rts-accordion"
                                        >
                                            <div className="accordion-body">
                                                Above all else, we strive to deliver outstanding customer
                                                experiences. When you buy a domain name from hostie, we
                                                guarantee it will be handed over.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}
                                        onClick={() => handleToggle(1)}>
                                        <div className="accordion-header" id="three">
                                            <h4
                                                className="accordion-button collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#item__three"
                                                aria-controls="item__three"
                                            >
                                                Why is domain name registration required?
                                            </h4>
                                        </div>
                                        <div
                                            id="item__three"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="three"
                                            data-bs-parent="#rts-accordion"
                                        >
                                            <div className="accordion-body">
                                                Above all else, we strive to deliver outstanding customer
                                                experiences. When you buy a domain name from hostie, we
                                                guarantee it will be handed over.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-item ${activeIndex === 2 ? "active" : ""}`}
                                        onClick={() => handleToggle(2)}>
                                        <div className="accordion-header" id="four">
                                            <h4
                                                className="accordion-button collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#item__four"
                                                aria-controls="item__four"
                                            >
                                                Why is domain name registration required?
                                            </h4>
                                        </div>
                                        <div
                                            id="item__four"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="four"
                                            data-bs-parent="#rts-accordion"
                                        >
                                            <div className="accordion-body">
                                                Above all else, we strive to deliver outstanding customer
                                                experiences. When you buy a domain name from hostie, we
                                                guarantee it will be handed over.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-item ${activeIndex === 3 ? "active" : ""}`}
                                        onClick={() => handleToggle(3)}>
                                        <div className="accordion-header" id="five">
                                            <h4
                                                className="accordion-button collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#item__five"
                                                aria-controls="item__four"
                                            >
                                                Why is domain name registration required?
                                            </h4>
                                        </div>
                                        <div
                                            id="item__five"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="five"
                                            data-bs-parent="#rts-accordion"
                                        >
                                            <div className="accordion-body">
                                                Above all else, we strive to deliver outstanding customer
                                                experiences. When you buy a domain name from hostie, we
                                                guarantee it will be handed over.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-item ${activeIndex === 4 ? "active" : ""}`}
                                        onClick={() => handleToggle(4)}>
                                        <div className="accordion-header" id="six">
                                            <h4
                                                className="accordion-button collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#item__six"
                                                aria-controls="item__four"
                                            >
                                                Why is domain name registration required?
                                            </h4>
                                        </div>
                                        <div
                                            id="item__six"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="six"
                                            data-bs-parent="#rts-accordion"
                                        >
                                            <div className="accordion-body">
                                                Above all else, we strive to deliver outstanding customer
                                                experiences. When you buy a domain name from hostie, we
                                                guarantee it will be handed over.
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

export default HomeSevenFaq
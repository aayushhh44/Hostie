import React, { useState } from 'react'
import posts from '../../data/Posts.json';
import PostTwo from '../blog/PostTwo';
function HomeThreeBlog() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <section className="rts-blog-area pt--120 section-style-radius-blog">
                <div className="container">
                    <div className="section-title-area text-center">
                        <h3
                            className="section-title"
                            data-sal="slide-down"
                            data-sal-delay={200}
                            data-sal-duration={800}
                        >
                            Latest Articles
                        </h3>
                        <p
                            className="desc"
                            data-sal="slide-down"
                            data-sal-delay={300}
                            data-sal-duration={800}
                        >
                            First website to Cloud ways from any web host your live site hosted on
                            the old host.
                        </p>
                    </div>
                    <div
                        className="section-inner"
                        data-sal="slide-down"
                        data-sal-delay={400}
                        data-sal-duration={800}
                    >
                        <div className="row">
                            {posts.map((data, index) => {
                                return (
                                    <div key={index} className="col-lg-6 col-md-6 col-sm-10">
                                        <div className="blog-wrapper align-items-center wrapper-z-index">
                                            {
                                                <PostTwo
                                                    blogCategory={data.category}
                                                    blogID={data.id}
                                                    blogImage={`${data.image}`}
                                                    authorImg={`${data.authorImg}`}
                                                    blogTitle={data.title}
                                                    blogAuthor={data.author}
                                                    blogPublishedDate={data.publishedDate}
                                                />
                                            }
                                        </div>

                                    </div>
                                )
                            }).slice(9, 11)}
                        </div>
                    </div>
                </div>
                <div className="blog-shape-area">
                    <img className="one" src="assets/images/blog/line.svg" alt="" />
                </div>
                {/* FAQ */}
                <div className="rts-faq pt--120">
                    <div className="container">
                        <div className="row gy-40 justify-content-md-center">
                            <div className="col-lg-5 col-md-10">
                                <div
                                    className="rts-faq__first"
                                    data-sal="slide-right"
                                    data-sal-delay={500}
                                    data-sal-duration={800}
                                >
                                    <h3 className="title">Got questions? Well, we've got answers.</h3>
                                    <p>
                                        Find answers to frequently asked questions about website hosting
                                        services.
                                    </p>
                                    <img src="assets/images/faq/faq__animated2.png" alt="faq" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10 offset-lg-1">
                                <div className="rts-faq__accordion">
                                    <div className="accordion accordion-flush" id="rts-accordion">
                                        <div className={`accordion-item ${activeIndex === 0 ? "active" : ""}`}
                                            onClick={() => handleToggle(0)} >
                                            <div className="accordion-header" id="two">
                                                <h4 className="accordion-button" data-bs-toggle="collapse" data-bs-target="#item__two" aria-controls="item__two">
                                                    How does domain registration work?
                                                </h4>
                                            </div>
                                            <div id="item__two" className="accordion-collapse collapse show" aria-labelledby="two" data-bs-parent="#rts-accordion" >
                                                <div className="accordion-body">
                                                    Above all else, we strive to deliver outstanding customer
                                                    experiences. When you buy a domain name from hostie, we
                                                    guarantee it will be handed over.
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}
                                            onClick={() => handleToggle(1)} >
                                            <div className="accordion-header" id="three">
                                                <h4 className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#item__three" aria-controls="item__three">
                                                    Why is domain name registration required?
                                                </h4>
                                            </div>
                                            <div id="item__three" className="accordion-collapse collapse" aria-labelledby="three" data-bs-parent="#rts-accordion">
                                                <div className="accordion-body">
                                                    Above all else, we strive to deliver outstanding customer
                                                    experiences. When you buy a domain name from hostie, we
                                                    guarantee it will be handed over.
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-item ${activeIndex === 2 ? "active" : ""}`}
                                            onClick={() => handleToggle(2)} >
                                            <div className="accordion-header" id="four">
                                                <h4 className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#item__four" aria-controls="item__four">
                                                    Why is domain name registration required?
                                                </h4>
                                            </div>
                                            <div id="item__four" className="accordion-collapse collapse" aria-labelledby="four" data-bs-parent="#rts-accordion" >
                                                <div className="accordion-body">
                                                    Above all else, we strive to deliver outstanding customer
                                                    experiences. When you buy a domain name from hostie, we
                                                    guarantee it will be handed over.
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-item ${activeIndex === 3 ? "active" : ""}`}
                                            onClick={() => handleToggle(3)} >
                                            <div className="accordion-header" id="five">
                                                <h4 className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#item__five" aria-controls="item__five" >
                                                    Why is domain name registration required?
                                                </h4>
                                            </div>
                                            <div id="item__five" className="accordion-collapse collapse" aria-labelledby="five" data-bs-parent="#rts-accordion">
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
                {/* FAQ END */}
            </section>

        </>
    )
}

export default HomeThreeBlog
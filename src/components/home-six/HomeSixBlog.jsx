import React from 'react'
import posts from '../../data/Posts.json';
import PostTwo from '../blog/PostTwo';
function HomeSixBlog() {
    return (
        <>
            <section className="rts-blog-area blog-area-six pt--120 pb--120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-title-area w-450 text-center">
                            <h2
                                className="section-title "
                                data-sal="slide-down"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
                                Latest Articles
                            </h2>
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
                    </div>
                    <div className="section-inner">
                        <div className="row gy-30">
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
            </section>

        </>
    )
}

export default HomeSixBlog
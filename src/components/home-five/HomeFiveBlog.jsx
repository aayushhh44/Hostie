import React from 'react'
import { Link } from 'react-router-dom';
import PostThree from '../blog/PostThree';
import posts from '../../data/Posts.json';
import PostFour from '../blog/PostFour';
function HomeFiveBlog() {
    return (
        <>
            <section className="rts-blog-area area-5 pt--120 pb--120">
                <div className="container">
                    <div className="row">
                        <div className="section-title-area text-center">
                            <h2 className="section-title">Latest New &amp; Articles</h2>
                            <Link to="/contact" className="newsletter-btn">
                                <div className="icon">
                                    <img src="assets/images/blog/plane.svg" alt="" />
                                </div>
                                <div className="title">Subscribe to the Newsletter</div>
                            </Link>
                        </div>
                    </div>
                    <div className="section-inner">
                        <div className="row gy-40 justify-content-md-center">
                            {posts.map((data, index) => {
                                return (
                                    <div key={index} className="col-lg-5 col-md-10">
                                        <div className="blog-inner">
                                            {
                                                <PostThree
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
                            }).slice(0, 1)}
                            <div className="col-lg-7 col-md-10">
                                <div className="blog-right-side">
                                    {posts.map((data, index) => {
                                        return (
                                            <div key={index} className="blog-wrapper">
                                                {
                                                    <PostFour
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
                                        )
                                    }).slice(11, 14)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeFiveBlog
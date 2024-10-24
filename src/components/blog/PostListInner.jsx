import React from 'react'
import { Link } from 'react-router-dom'
import PostList from './PostList'
import posts from '../../data/Posts.json';

function PostListInner() {
    return (
        <>
            <div className="rts-blog-area section__padding">
                <div className="container">
                    <div className="row g-40">
                        <div className="col-lg-8">
                            <div className="rts-blog-list">
                                {posts.map((data, index) => {
                                    return (
                                        <div key={index} className="single-post">
                                            {
                                                <PostList
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
                                }).slice(14, 17)}
                                <div className="blog-pagination-area">
                                    <ul>
                                        <li>
                                            <Link to="#">
                                                <i className="fa-regular fa-chevron-left" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="active" to="#">
                                                1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">2</Link>
                                        </li>
                                        <li>
                                            <Link to="#">3</Link>
                                        </li>
                                        <li>...</li>
                                        <li>
                                            <Link to="#">8</Link>
                                        </li>
                                        <li>
                                            <Link to="#">9</Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa-regular fa-chevron-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="rts-sidebar">
                                {/* single widget */}
                                <div className="rts-single-widget search-widget">
                                    <form action="#" method="post">
                                        <input
                                            type="text"
                                            name="s"
                                            id="search"
                                            placeholder="Enter Keyword"
                                            required=""
                                        />
                                        <button type="submit">
                                            <i className="fa-regular fa-search" />
                                        </button>
                                    </form>
                                </div>
                                {/* single widget end */}
                                {/* single widget start */}
                                <div className="rts-single-widget category-widget">
                                    <h4 className="widget-title">All Services</h4>
                                    <ul className="list-unstyled cat__counter">
                                        <li className="single-cat">
                                            <Link to="#">
                                                Space Planning{" "}
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="single-cat">
                                            <Link to="#">
                                                Interior design{" "}
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="single-cat">
                                            <Link to="#">
                                                Remodeling Services{" "}
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="single-cat">
                                            <Link to="#">
                                                Urban Planning{" "}
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="single-cat">
                                            <Link to="#">
                                                Kitchen Cabinet{" "}
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="single-cat">
                                            <Link to="#">
                                                3d Visualization{" "}
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* single widget end */}
                                {/* single widget start */}
                                <div className="rts-single-widget recentpost-widget">
                                    <h4 className="widget-title">Recent Post</h4>
                                    <div className="recent-posts">
                                        <div className="single-post">
                                            <div className="thumb">
                                                <img
                                                    src="assets/images/blog/blog-recent-1.png"
                                                    alt=""
                                                    height={85}
                                                    width={85}
                                                />
                                            </div>
                                            <div className="meta">
                                                <span className="published">
                                                    <i className="fa-regular fa-clock" /> 15 Jan, 2023
                                                </span>
                                                <h6 className="title">
                                                    <Link to="#">We would love to share a similar experience</Link>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="single-post">
                                            <div className="thumb">
                                                <img
                                                    src="assets/images/blog/blog-recent-2.png"
                                                    alt=""
                                                    height={85}
                                                    width={85}
                                                />
                                            </div>
                                            <div className="meta">
                                                <span className="published">
                                                    <i className="fa-regular fa-clock" /> 15 Jan, 2023
                                                </span>
                                                <h6 className="title">
                                                    <Link to="#">We would love to share a similar experience</Link>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="single-post">
                                            <div className="thumb">
                                                <img
                                                    src="assets/images/blog/blog-recent-3.png"
                                                    alt=""
                                                    height={85}
                                                    width={85}
                                                />
                                            </div>
                                            <div className="meta">
                                                <span className="published">
                                                    <i className="fa-regular fa-clock" /> 15 Jan, 2023
                                                </span>
                                                <h6 className="title">
                                                    <Link to="#">We would love to share a similar experience</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single widget end */}
                                {/* single widget start */}
                                <div className="rts-single-widget gallery-widget">
                                    <h4 className="widget-title">Gallery Post</h4>
                                    <div className="gallery-posts">
                                        <Link to="blog-details" className="thumb">
                                            <img
                                                src="assets/images/blog/gallery-post-1.png"
                                                height={95}
                                                width={95}
                                                alt=""
                                            />
                                        </Link>
                                        <Link to="blog-details" className="thumb">
                                            <img
                                                src="assets/images/blog/gallery-post-2.png"
                                                height={95}
                                                width={95}
                                                alt=""
                                            />
                                        </Link>
                                        <Link to="blog-details" className="thumb">
                                            <img
                                                src="assets/images/blog/gallery-post-3.png"
                                                height={95}
                                                width={95}
                                                alt=""
                                            />
                                        </Link>
                                        <Link to="blog-details" className="thumb">
                                            <img
                                                src="assets/images/blog/gallery-post-4.png"
                                                height={95}
                                                width={95}
                                                alt=""
                                            />
                                        </Link>
                                        <Link to="blog-details" className="thumb">
                                            <img
                                                src="assets/images/blog/gallery-post-5.png"
                                                height={95}
                                                width={95}
                                                alt=""
                                            />
                                        </Link>
                                        <Link to="blog-details" className="thumb">
                                            <img
                                                src="assets/images/blog/gallery-post-6.png"
                                                height={95}
                                                width={95}
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                </div>
                                {/* single widget end */}
                                {/* single widget start */}
                                <div className="rts-single-widget tags-widget">
                                    <h4 className="widget-title">popular tags</h4>
                                    <div className="popular-tags">
                                        <ul className="list-unstyled tags-style">
                                            <li className="tags">
                                                <Link to="#">service</Link>
                                            </li>
                                            <li className="tags">
                                                <Link to="#">Business</Link>
                                            </li>
                                            <li className="tags">
                                                <Link to="#">Growth</Link>
                                            </li>
                                            <li className="tags">
                                                <Link to="#">Kitchen</Link>
                                            </li>
                                            <li className="tags">
                                                <Link to="#">Interior Design</Link>
                                            </li>
                                            <li className="tags">
                                                <Link to="#">Solution</Link>
                                            </li>
                                            <li className="tags">
                                                <Link to="#">Urban</Link>
                                            </li>
                                            <li className="tags">
                                                <Link to="#">Buildings</Link>
                                            </li>
                                            <li className="tags">
                                                <Link to="#">Architecture</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* single widget end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PostListInner
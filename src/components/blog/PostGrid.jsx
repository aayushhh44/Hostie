import React from 'react'
import { Link } from 'react-router-dom'
import posts from '../../data/Posts.json';
import PostTwo from '../blog/PostTwo';

function PostGrid() {
    return (
        <div>
            <section className="rts-blog-area blog-area-six inner pt--120">
                <div className="container">
                    <div className="section-inner">
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
                            }).slice(17, 25)}
                        </div>
                    </div>
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
            </section>

        </div>
    )
}

export default PostGrid
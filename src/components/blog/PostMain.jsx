import React from 'react'
import PostOne from '../blog/PostOne';
import posts from '../../data/Posts.json';
import { Link } from 'react-router-dom';
function PostMain() {
    return (
        <div>
            <section className="rts-blog pt-120">
                <div className="container">
                    <div className="row justify-content-sm-center justify-content-md-start g-30">
                    {posts.map((data, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-10">
                                     <div className="rts-blog__single">
                                    {
                                        <PostOne
                                            blogCategory= {data.category}
                                            blogID={data.id}
                                            blogImage= {`${data.image}`}
                                            authorImg= {`${data.authorImg}`}
                                            blogTitle= {data.title}
                                            blogAuthor= {data.author}
                                            blogPublishedDate= {data.publishedDate}
                                        />
                                    }
                                    </div>

                                </div>
                            )
                        }).slice(0, 9)}
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

export default PostMain
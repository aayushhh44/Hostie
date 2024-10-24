import React from 'react'
import { Link } from 'react-router-dom';

const PostTwo = (props) => {
    const { blogClass, blogID, blogImage, blogTitle, blogCategory, blogAuthor, authorImg, blogPublishedDate } = props;
    return (
        <>
            <div className="image">
                <img src={`assets/images/blog/${blogImage}`} alt="" />
            </div>
            <div className="content">
                <p className="blog-meta">
                    <span className="category">{blogCategory ? blogCategory : "1"}</span>
                    <span className="round" />
                    <span className="date">{blogPublishedDate ? blogPublishedDate : 'Charlie Doyle'}</span>
                </p>
                <h3 className="blog-title">
                    <Link to={`/blog/${blogID}`}>
                    {blogTitle ? blogTitle : 'How to growing your business'}
                    </Link>
                </h3>
                <p className="desc">
                    Cloudways is excited to announce the addition 16 new data
                    centers Consisting...
                </p>
                <Link to={`/blog/${blogID}`} className="read-more-btn">
                    Read More <i className="fa-light fa-angle-right" />
                </Link>
            </div>
            <div className="blog-shape">
                <img src="assets/images/blog/blog-shape.svg" alt="" />
            </div>
        </>

    )
}

export default PostTwo
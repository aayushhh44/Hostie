import React from 'react'
import { Link } from 'react-router-dom';
const PostFour = (props) => {
    const { blogClass, blogID, blogImage, blogTitle, blogCategory, blogAuthor, authorImg, blogPublishedDate } = props;
    return (
        <>
            <div className="image-area">
                <img src={`assets/images/blog/${blogImage}`} width="195" alt="" />
            </div>
            <div className="content">
                <div className="blog-meta">
                    <Link to="#" className="tag">
                    {blogCategory ? blogCategory : "1"}
                    </Link>
                    <span className="round" />
                    <span className="date">{blogPublishedDate ? blogPublishedDate : 'Charlie Doyle'}</span>
                </div>
                <h4 className="blog-title">
                    <Link to={`/blog/${blogID}`}>
                    {blogTitle ? blogTitle : 'Charlie Doyle'}
                    </Link>
                </h4>
            </div>
        </>
    )
}

export default PostFour
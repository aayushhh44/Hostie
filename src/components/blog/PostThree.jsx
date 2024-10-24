import React from 'react'
import { Link } from 'react-router-dom';

const PostThree = (props) => {
    const { blogClass, blogID, blogImage, blogTitle, blogCategory, blogAuthor, authorImg, blogPublishedDate } = props;
    return (
        <>
            <div className="image-area">
                <img src={`assets/images/blog/${blogImage}`} alt="" />
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
                    {blogTitle ? blogTitle : 'How to growing your business'}
                    </Link>
                </h4>
                <p className="desc">
                    It’s a super-easy-to-use tool that can help entrepreneurs,
                    startups, makers, and small business owners in their journey
                </p>
                <div className="author__meta">
                    <div className="author-image">
                        <img src="assets/images/author/author__one.png" alt="" />
                    </div>
                    <Link to="#" className="author-name">
                        sack jon
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PostThree
import React from 'react'
import { Link } from 'react-router-dom';

const PostOne = (props) => {
    const { blogClass, blogID, blogImage, blogTitle, blogCategory, blogAuthor, authorImg, blogPublishedDate } = props;
    return (
        <>
            <div className="blog__thumb w-img p-relative">
                <Link to={`/blog/${blogID}`}>
                    <img className='blog__thumb'
                        src={`assets/images/blog/${blogImage}`} alt='' />
                </Link>
            </div>
            <div className="rts-blog__single--meta">
                <div className="cat__date">
                    <Link to="#" className="cat">
                        {blogCategory ? blogCategory : "1"}
                    </Link>
                    <span className="date">{blogPublishedDate ? blogPublishedDate : 'Charlie Doyle'}</span>
                </div>

                <Link className="title" to={`/blog/${blogID}`}> {blogTitle ? blogTitle : 'How to growing your business'}</Link>
                <div className="rts-blog__single--author">
                    <div className="author">
                        <img src={`assets/images/author/${authorImg}`} alt="" />
                    </div>
                    <div className="author__content">
                        <Link to="#">{blogAuthor ? blogAuthor : 'Mack Jon'}</Link>
                        <span>Developer &amp; Web serenity </span>
                    </div>
                </div>
            </div>
        </>

    )
}

export default PostOne
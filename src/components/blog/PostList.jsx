import React from 'react'
import { Link } from 'react-router-dom';

const PostList = (props) => {
    const { blogClass, blogID, blogImage, blogTitle, blogCategory, blogAuthor, authorImg, blogPublishedDate } = props;
    return (
        <div>
            {/* single blog post */}
                <Link to={`/blog/${blogID}`}>
                    <img
                        src={`assets/images/blog/${blogImage}`}
                        width={870}
                        height={440}
                        alt=""
                    />
                </Link>
                <div className="single-post__meta">
                    <div className="author__date__cat">
                        <div className="author">
                            <i className="fa-regular fa-circle-user" /> By{" "}
                            <Link to="#">{blogAuthor ? blogAuthor : "1"}</Link>
                        </div>
                        <span className="date">
                            <i className="fa-regular fa-clock" /> 15 Jan, 2023
                        </span>
                        <div className="cat">
                            <i className="fa-regular fa-tags" />{" "}
                            <Link to="#">{blogCategory ? blogCategory : "1"}</Link>
                        </div>
                    </div>
                    <Link to={`/blog/${blogID}`} className="title fw-bold">
                    {blogTitle ? blogTitle : "1"}
                    </Link>
                    <p className="excerpt">
                        According to a newly adopted definition of cities proposed by
                        the European Commission and now shared by a number of major
                        international organizations such as the OECD, the World Bank and
                        UN-Habitat, an estimated 75% of the world's population live in
                        urbanized areas...
                    </p>
                    <Link
                        to="/blog-details"
                        className="readmore__btn rts-btn rts-btn-primary"
                    >
                        read more
                    </Link>
                </div>
            {/* single blog post end */}
        </div>
    )
}

export default PostList
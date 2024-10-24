import React from 'react'
import Header from '../components/header/Header'
import BlogBanner from '../components/blog-details/BlogBanner'
import PostListInner from '../components/blog/PostListInner'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function BlogList() {
  return (
    <div>
        <Header />
        <BlogBanner />
        <PostListInner />
        <HomeThreeFooter />
    </div>
  )
}

export default BlogList
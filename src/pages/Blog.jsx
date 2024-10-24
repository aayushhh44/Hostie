import React from 'react'
import Header from '../components/header/Header'
import BlogBanner from '../components/blog-details/BlogBanner'
import PostMain from '../components/blog/PostMain'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function Blog() {
  return (
    <div className='page-template template-resell'>
        <Header />
        <BlogBanner />
        <PostMain />
        <HomeThreeFooter />
    </div>
  )
}

export default Blog
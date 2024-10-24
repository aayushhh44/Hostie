import React from 'react'
import HeaderFour from '../components/header/HeaderFour'
import HomeSixBanner from '../components/home-six/HomeSixBanner'
import HomeSixFeature from '../components/home-six/HomeSixFeature'
import HomeFourPricing from '../components/home-four/HomeFourPricing'
import HomeSixHostingFeature from '../components/home-six/HomeSixHostingFeature'
import HomeSixService from '../components/home-six/HomeSixService'
import HomeSixBlog from '../components/home-six/HomeSixBlog'
import HomeSixContact from '../components/home-six/HomeSixContact'
import HomeFiveFooter from '../components/footer/HomeFiveFooter'

function HomeSix() {
  return (
    <div>
        <HeaderFour />
        <HomeSixBanner />
        <HomeSixFeature />
        <HomeFourPricing />
        <HomeSixHostingFeature />
        <HomeSixService />
        <HomeSixBlog />
        <HomeSixContact />
        <HomeFiveFooter />
    </div>
  )
}

export default HomeSix
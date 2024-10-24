import React from 'react'
import HeaderEight from '../components/header/HeaderEight'
import HomeNineBanner from '../components/home-nine/HomeNineBanner'
import HomeNineHostingType from '../components/home-nine/HomeNineHostingType'
import HomeNineDomainFinder from '../components/home-nine/HomeNineDomainFinder'
import HomeNineAbout from '../components/home-nine/HomeNineAbout'
import HomeNinePlan from '../components/home-nine/HomeNinePlan'
import HomeNineTestimonials from '../components/home-nine/HomeNineTestimonials'
import HomeFaq from '../components/home-one/HomeFaq'
import HomeNineContact from '../components/home-nine/HomeNineContact'
import HomeFooter from '../components/footer/HomeFooter'

function HomeNine() {
  return (
    <div>
        <HeaderEight />
        <HomeNineBanner />
        <HomeNineHostingType />
        <HomeNineDomainFinder />
        <HomeNineAbout />
        <HomeNinePlan />
        <HomeNineTestimonials />
        <HomeFaq />
        <HomeNineContact />
        <HomeFooter />
    </div>
  )
}

export default HomeNine
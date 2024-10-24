import React from 'react'
import HeaderTen from '../components/header/HeaderTen'
import HomeTenBanner from '../components/home-ten/HomeTenBanner'
import HomeTenWhyChoose from '../components/home-ten/HomeTenWhyChoose'
import HomeTenPricing from '../components/home-ten/HomeTenPricing'
import HomeTenHostingFeature from '../components/home-ten/HomeTenHostingFeature'
import HomeTestimonials from '../components/home-one/HomeTestimonials'
import HomeTenSupport from '../components/home-ten/HomeTenSupport'
import HomeTenFaq from '../components/home-ten/HomeTenFaq'
import HomeTenBrand from '../components/home-ten/HomeTenBrand'
import HomeTenFooter from '../components/footer/HomeTenFooter'

function HomeTen() {
  return (
    <div>
        <HeaderTen />
        <HomeTenBanner />
        <HomeTenWhyChoose />
        <HomeTenPricing />
        <HomeTenHostingFeature />
        <HomeTestimonials />
        <HomeTenSupport />
        <HomeTenFaq />
        <HomeTenBrand />
        <HomeTenFooter />
    </div>
  )
}

export default HomeTen
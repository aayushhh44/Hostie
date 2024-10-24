import React from 'react'
import HeaderEight from '../components/header/HeaderEight'
import HomeEightBanner from '../components/home-eight/HomeEightBanner'
import HomeEightFeature from '../components/home-eight/HomeEightFeature'
import HomeEightPricing from '../components/home-eight/HomeEightPricing'
import HomeEightSupportFeature from '../components/home-eight/HomeEightSupportFeature'
import HomeEightTestimonials from '../components/home-eight/HomeEightTestimonials'
import HomeEightCloudFeature from '../components/home-eight/HomeEightCloudFeature'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function HomeEight() {
  return (
    <div className='cloud__hosting'>
        <HeaderEight />
        <HomeEightBanner />
        <HomeEightFeature />
        <HomeEightPricing />
        <HomeEightSupportFeature />
        <HomeEightTestimonials />
        <HomeEightCloudFeature />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default HomeEight
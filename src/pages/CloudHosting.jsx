import React from 'react'
import Header from '../components/header/Header'
import CloudHostingBanner from '../components/cloud-hosting/CloudHostingBanner'
import CloudHostingFeature from '../components/cloud-hosting/CloudHostingFeature'
import HomeFourPricing from '../components/home-four/HomeFourPricing'
import CloudHostingSupportFeature from '../components/cloud-hosting/CloudHostingSupportFeature'
import AboutTestimonials from '../components/about/AboutTestimonials'
import PricingFaq from '../components/pricing/PricingFaq'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function CloudHosting() {
  return (
    <div className='page-template template-cloud'>
        <Header />
        <CloudHostingBanner />
        <CloudHostingFeature />
        <HomeFourPricing />
        <CloudHostingSupportFeature />
        <AboutTestimonials className=""/>
        <PricingFaq />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default CloudHosting
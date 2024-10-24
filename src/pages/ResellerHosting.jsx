import React from 'react'
import Header from '../components/header/Header'
import ResellerHostingBanner from '../components/reseller-hosting/ResellerHostingBanner'
import AboutReseller from '../components/about/AboutReseller'
import HomeFourPricing from '../components/home-four/HomeFourPricing'
import ResellerHostingFeature from '../components/reseller-hosting/ResellerHostingFeature'
import AboutTestimonials from '../components/about/AboutTestimonials'
import PricingFaq from '../components/pricing/PricingFaq'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function ResellerHosting() {
  return (
    <div className='page-template template-resell'>
        <Header />
        <ResellerHostingBanner />
        <AboutReseller />
        <HomeFourPricing />
        <ResellerHostingFeature />
        <AboutTestimonials className=""/>
        <PricingFaq />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default ResellerHosting
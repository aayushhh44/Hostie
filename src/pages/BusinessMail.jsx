import React from 'react'
import Header from '../components/header/Header'
import BusinessMailBanner from '../components/business-mail/BusinessMailBanner'
import BusinessMailFeature from '../components/business-mail/BusinessMailFeature'
import HomeFourPricing from '../components/home-four/HomeFourPricing'
import PricingFaq from '../components/pricing/PricingFaq'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'
import HomeFourSupport from '../components/home-four/HomeFourSupport'

function BusinessMail() {
  return (
    <div className='page-template'>
        <Header />
        <BusinessMailBanner />
        <BusinessMailFeature />
        <HomeFourPricing />
        <PricingFaq />
        <HomeFourSupport className="black__friday--support"  />
        <HomeEightCta className="pt--120"/>
        <HomeThreeFooter />
    </div>
  )
}

export default BusinessMail
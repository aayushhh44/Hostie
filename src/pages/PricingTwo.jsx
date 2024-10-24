import React from 'react'
import Header from '../components/header/Header'
import PricingBanner from '../components/pricing/PricingBanner'
import HomeTwoPricing from '../components/home-two/HomeTwoPricing'
import AffiliateTestimonials from '../components/affiliate/AffiliateTestimonials'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function PricingTwo() {
  return (
    <div className='page-template template-pricing'>
        <Header />
        <PricingBanner />
        <HomeTwoPricing />
        <AffiliateTestimonials className="pt--0"/>
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default PricingTwo
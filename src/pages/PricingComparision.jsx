import React from 'react'
import Header from '../components/header/Header'
import PricingBanner from '../components/pricing/PricingBanner'
import HomeFourPricing from '../components/home-four/HomeFourPricing'
import PricingFaq from '../components/pricing/PricingFaq'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function PricingComparision() {
  return (
    <div className='page-template template-pricing'>
      <Header />
      <PricingBanner />
      <HomeFourPricing />
      <PricingFaq />
      <HomeEightCta />
      <HomeThreeFooter />
    </div>
  )
}

export default PricingComparision
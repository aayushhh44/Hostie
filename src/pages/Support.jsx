import React from 'react'
import Header from '../components/header/Header'
import SupportBanner from '../components/support/SupportBanner'
import AboutReseller from '../components/about/AboutReseller'
import AffiliatePromote from '../components/affiliate/AffiliatePromote'
import PricingFaq from '../components/pricing/PricingFaq'
import HomeSixContact from '../components/home-six/HomeSixContact'
import AffiliateTestimonials from '../components/affiliate/AffiliateTestimonials'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function Support() {
  return (
    <div>
        <Header />
        <SupportBanner />
        <AboutReseller />
        <AffiliatePromote className="d-none"/>
        <PricingFaq />
        <HomeSixContact className="d-none" />
        <AffiliateTestimonials />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default Support
import React from 'react'
import Header from '../components/header/Header'
import PartnersBanner from '../components/partners/PartnersBanner'
import PartnersFeature from '../components/partners/PartnersFeature'
import HomeFourSupport from '../components/home-four/HomeFourSupport'
import AffiliateTestimonials from '../components/affiliate/AffiliateTestimonials'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function Partner() {
  return (
    <div>
        <Header />
        <PartnersBanner />
        <PartnersFeature />
        <HomeFourSupport className="black__friday--support" />
        <AffiliateTestimonials />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default Partner
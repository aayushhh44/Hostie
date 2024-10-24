import React from 'react'
import Header from '../components/header/Header'
import TechnologyBanner from '../components/technology/TechnologyBanner'
import TechnologyFeature from '../components/technology/TechnologyFeature'
import TechnologyPerfomance from '../components/technology/TechnologyPerfomance'
import TechnologyAboutSeller from '../components/technology/TechnologyAboutSeller'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function Technology() {
  return (
    <div>
        <Header />
        <TechnologyBanner />
        <TechnologyFeature />
        <TechnologyPerfomance />
        <TechnologyAboutSeller />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default Technology
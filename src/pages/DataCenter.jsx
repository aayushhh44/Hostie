import React from 'react'
import Header from '../components/header/Header'
import DataCenterBanner from '../components/data-center/DataCenterBanner'
import DataCenterFeature from '../components/data-center/DataCenterFeature'
import DataCenterCdnFeature from '../components/data-center/DataCenterCdnFeature'
import HomeFourSupport from '../components/home-four/HomeFourSupport'
import HomeData from '../components/home-one/HomeData'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function DataCenter() {
  return (
    <div>
        <Header />
        <DataCenterBanner />
        <DataCenterFeature />
        <DataCenterCdnFeature />
        <HomeFourSupport className="black__friday--support"  />
        <HomeData className="no-bg" />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default DataCenter
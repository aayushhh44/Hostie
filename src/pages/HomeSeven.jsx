import React from 'react'
import HeaderFive from '../components/header/HeaderFive'
import HomeSevenBanner from '../components/home-seven/HomeSevenBanner'
import HomeSevenPopularGame from '../components/home-seven/HomeSevenPopularGame'
import HomeSevenGameBanner from '../components/home-seven/HomeSevenGameBanner'
import HomeSevenFeature from '../components/home-seven/HomeSevenFeature'
import HomeSevenPricing from '../components/home-seven/HomeSevenPricing'
import HomeSevenGameCollection from '../components/home-seven/HomeSevenGameCollection'
import HomeSevenTestimonials from '../components/home-seven/HomeSevenTestimonials'
import HomeSevenFaq from '../components/home-seven/HomeSevenFaq'
import HomeSevenFooter from '../components/footer/HomeSevenFooter'

function HomeSeven() {
  return (
    <div className='template-game'>
        <HeaderFive />
        <HomeSevenBanner />
        <HomeSevenPopularGame />
        <HomeSevenGameBanner />
        <HomeSevenFeature />
        <HomeSevenPricing />
        <HomeSevenGameCollection />
        <HomeSevenTestimonials />
        <HomeSevenFaq />
        <HomeSevenFooter />
    </div>
  )
}

export default HomeSeven
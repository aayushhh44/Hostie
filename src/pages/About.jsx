import React from 'react'
import Header from '../components/header/Header'
import AboutBanner from '../components/about/AboutBanner'
import AboutReseller from '../components/about/AboutReseller'
import AboutResellerTwo from '../components/about/AboutResellerTwo'
import AboutDataCenter from '../components/about/AboutDataCenter'
import AboutCounterUp from '../components/about/AboutCounterUp'
import AboutTeam from '../components/about/AboutTeam'
import AboutTestimonials from '../components/about/AboutTestimonials'
import AboutCta from '../components/about/AboutCta'
import HomeTwoFooter from '../components/footer/HomeTwoFooter'

function About() {
  return (
    <div className='page-template template-resell'>
        <Header />
        <AboutBanner />
        <AboutReseller />
        <AboutResellerTwo />
        <AboutDataCenter />
        <AboutCounterUp />
        <AboutTeam />
        <AboutTestimonials />
        <AboutCta />
        <HomeTwoFooter />
    </div>
  )
}

export default About
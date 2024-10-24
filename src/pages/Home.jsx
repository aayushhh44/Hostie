import React from 'react'
import Header from '../components/header/Header';
import HomeBanner from "../components/home-one/HomeBanner";
import HomeBrand from '../components/home-one/HomeBrand';
import HomeHosting from '../components/home-one/HomeHosting';
import HomeAbout from '../components/home-one/HomeAbout';
import HomeDomain from '../components/home-one/HomeDomain';
import HomeService from '../components/home-one/HomeService';
import HomeData from '../components/home-one/HomeData';
import HomeFlashSale from '../components/home-one/HomeFlashSale';
import HomeWhyChoose from '../components/home-one/HomeWhyChoose';
import HomePlan from '../components/home-one/HomePlan';
import HomeTestimonials from '../components/home-one/HomeTestimonials';
import HomeFaq from '../components/home-one/HomeFaq';
import HomeCta from '../components/home-one/HomeCta';
import HomeFooter from '../components/footer/HomeFooter';

function Home() {
  return (
    <>
        <Header />
        <HomeBanner />
        <HomeBrand className="rts-brand__bg--section pt-100 pb-120" />
        <HomeHosting />
        <HomeAbout />
        <HomeDomain />
        <HomeService />
        <HomeData />
        <HomeFlashSale />
        <HomeWhyChoose />
        <HomePlan />
        <HomeTestimonials />
        <HomeFaq />
        <HomeCta />
        <HomeFooter />
    </>
  )
}

export default Home
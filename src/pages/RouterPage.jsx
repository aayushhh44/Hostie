import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadTop from '../components/LoadTop';
import BackToTop from '../components/BackToTop';
import Home from "./Home";
import HomeTwo from './HomeTwo';
import HomeThree from './HomeThree';
import HomeFour from './HomeFour';
import HomeFive from './HomeFive';
import HomeSix from './HomeSix';
import HomeSeven from './HomeSeven';
import HomeEight from './HomeEight';
import HomeNine from './HomeNine';
import HomeTen from './HomeTen';
import HomeEleven from './HomeEleven';
import About from './About';
import Pricing from './Pricing';
import PricingTwo from './PricingTwo';
import Affiliate from './Affiliate';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Partner from './Partner';
import Support from './Support';
import BusinessMail from './BusinessMail';
import Faq from './Faq';
import Contact from './Contact';
import Knowledgebase from './Knowledgebase';
import Technology from './Technology';
import DataCenter from './DataCenter';
import GameDetails from './GameDetails';
import DomainChecker from './DomainChecker';
import DomainTransfer from './DomainTransfer';
import DomainRegistration from './DomainRegistration';
import SharedHosting from './SharedHosting';
import WordPressHosting from './WordPressHosting';
import VpsHosting from './VpsHosting';
import ResellerHosting from './ResellerHosting';
import DedicatedHosting from './DedicatedHosting';
import CloudHosting from './CloudHosting';
import PaymentMethod from './PaymentMethod';
import PricingComparision from './PricingComparision';
import BlogDetails from './BlogDetails';
import Blog from './Blog';
import BlogList from './BlogList';
import BlogGrid from './BlogGrid';
function RouterPage() {
  return (
    <div>
      <Router>
        <LoadTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home-two" element={<HomeTwo />}></Route>
          <Route path="/home-three" element={<HomeThree />}></Route>
          <Route path="/home-four" element={<HomeFour />}></Route>
          <Route path="/home-five" element={<HomeFive />}></Route>
          <Route path="/home-six" element={<HomeSix />}></Route>
          <Route path="/home-seven" element={<HomeSeven />}></Route>
          <Route path="/home-eight" element={<HomeEight />}></Route>
          <Route path="/home-nine" element={<HomeNine />}></Route>
          <Route path="/home-ten" element={<HomeTen />}></Route>
          <Route path="/home-eleven" element={<HomeEleven />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/pricing-two" element={<PricingTwo />}></Route>
          <Route path="/affiliate" element={<Affiliate />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/partner" element={<Partner />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/business-mail" element={<BusinessMail />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/knowledgebase" element={<Knowledgebase />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
          <Route path="/data-center" element={<DataCenter />}></Route>
          <Route path="/game-details" element={<GameDetails />}></Route>
          <Route path="/domain-checker" element={<DomainChecker />}></Route>
          <Route path="/domain-transfer" element={<DomainTransfer />}></Route>
          <Route path="/domain-registration" element={<DomainRegistration />}></Route>
          <Route path="/shared-hosting" element={<SharedHosting />}></Route>
          <Route path="/wordpress-hosting" element={<WordPressHosting />}></Route>
          <Route path="/vps-hosting" element={<VpsHosting />}></Route>
          <Route path="/reseller-hosting" element={<ResellerHosting />}></Route>
          <Route path="/dedicated-hosting" element={<DedicatedHosting />}></Route>
          <Route path="/cloud-hosting" element={<CloudHosting />}></Route>
          <Route path="/payment-method" element={<PaymentMethod />}></Route>
          <Route path="/pricing-three" element={<PricingComparision />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog-list" element={<BlogList />}></Route>
          <Route path="/blog-grid" element={<BlogGrid />}></Route>
          <Route path="/blog/:id" element={<BlogDetails />}></Route>
        </Routes>
        <BackToTop />
      </Router>
    </div>
  )
}

export default RouterPage
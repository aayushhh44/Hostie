import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SideMenu from '../SideMenu';

function HeaderTen() {
    const [isSticky, setIsSticky] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <header className={`rts-header header__with__bg header__default ${isSticky ? 'header-sticky' : ''}`}>
                {/* HEADER TOP AREA */}
                <div className="rts-ht rts-ht__bg">
                    <div className="container">
                        <div className="row">
                            <div className="rts-ht__wrapper">
                                <div className="rts-ht__email">
                                    <Link to="/mailto:info@hostie.com">
                                        <img src="/assets/images/icon/email.svg" alt="" className="icon" />
                                        contact@hostie.com
                                    </Link>
                                </div>
                                <div className="rts-ht__promo">
                                    <p>
                                        <img
                                            className="icon"
                                            src="/assets/images/icon/tag--group.svg"
                                            alt=""
                                        />{" "}
                                        Hosting Flash Sale: Starting at <strong>$2.59/mo</strong> for a
                                        limited time
                                    </p>
                                </div>
                                <div className="rts-ht__links">
                                    <div className="live-chat-has-dropdown">
                                        <Link to="/support" className="live__chat">
                                            <img
                                                src="/assets/images/icon/forum.svg"
                                                alt=""
                                                className="icon"
                                            />
                                            Live Chat
                                        </Link>
                                    </div>
                                    <div className="login-btn-has-dropdown">
                                        <Link to="#" className="login__link">
                                            <img
                                                src="/assets/images/icon/person.svg"
                                                alt=""
                                                className="icon"
                                            />
                                            Login
                                        </Link>
                                        <div className="login-submenu">
                                            <form action="#">
                                                <div className="form-inner">
                                                    <div className="single-wrapper">
                                                        <input
                                                            type="email"
                                                            placeholder="Your email"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="single-wrapper">
                                                        <input
                                                            type="password"
                                                            placeholder="Password"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-btn">
                                                        <button type="submit" className="primary__btn">
                                                            Log In
                                                        </button>
                                                    </div>
                                                    <Link to="#" className="forgot-password">
                                                        Forgot your password?
                                                    </Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* HEADER TOP AREA END */}
                <div className="rts-menu">
                    <div className="container">
                        <div className="row">
                            <div className="rts-header__wrapper">
                                {/* FOR LOGO */}
                                <div className="rts-header__logo">
                                    <Link to="/" className="site-logo">
                                        <img
                                            className="logo-white"
                                            src="/assets/images/logo/logo-1.svg"
                                            alt="Hostie"
                                        />
                                        <img
                                            className="logo-dark"
                                            src="/assets/images/logo/logo-4.svg"
                                            alt="Hostie"
                                        />
                                    </Link>
                                </div>
                                {/* FOR NAVIGATION MENU */}
                                <nav className="rts-header__menu" id="mobile-menu">
                                    <div className="hostie-menu">
                                        <ul className="list-unstyled hostie-desktop-menu">
                                            <li className="menu-item hostie-has-dropdown">
                                                <Link to="#" className="hostie-dropdown-main-element">
                                                    Home
                                                </Link>
                                                <div className="has-homemenu">
                                                    <div className="row gx-5 row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5">
                                                        <div className="col homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <Link to="/">
                                                                    <img src="/assets/images/home/home-1.png" alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    <Link to="/">Home 01</Link>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <Link to="/home-two">
                                                                    <img src="/assets/images/home/home-2.png" alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    <Link to="/home-two">Home 02</Link>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <Link to="/home-three">
                                                                    <img src="/assets/images/home/home-3.png" alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    <Link to="/home-three">Home 03</Link>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <Link to="/home-four">
                                                                    <img src="/assets/images/home/home-4.png" alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    <Link to="/home-four">Home 04</Link>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <Link to="/home-five">
                                                                    <img src="/assets/images/home/home-5.png" alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    <Link to="/home-five">Home 05</Link>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <Link to="/home-six">
                                                                    <img src="/assets/images/home/home-6.png" alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    <Link to="/home-six">Home 06</Link>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <Link to="/home-seven">
                                                                    <img src="/assets/images/home/home-8.png" alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    <Link to="/home-seven">Home 07</Link>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <Link to="/home-eight">
                                                                    <img src="/assets/images/home/home-7.png" alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    <Link to="/home-eight">Home 08</Link>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <Link to="/home-nine">
                                                                    <img src="/assets/images/home/home-9.png" alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    <Link to="/home-nine">Home 09</Link>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <Link to="/home-ten">
                                                                    <img src="/assets/images/home/home-10.png" alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    <Link to="/home-ten">Home 10</Link>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <Link to="/home-eleven">
                                                                    <img src="/assets/images/home/home-11.png" alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    <Link to="/home-eleven">Home 11</Link>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*  */}
                                            <li className="menu-item hostie-has-dropdown mega-menu big">
                                                <Link to="#" className="hostie-dropdown-main-element">
                                                    Pages
                                                </Link>
                                                <div className="rts-mega-menu">
                                                    <div className="wrapper">
                                                        <div className="row g-0">
                                                            <div className="col-lg-3">
                                                                <ul className="mega-menu-item">
                                                                    <li>
                                                                        <Link to="/about">
                                                                            <img
                                                                                src="/assets/images/mega-menu/01.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>About Hostie</p>
                                                                                <span>Get know about Hostie </span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/pricing">
                                                                            <img
                                                                                src="/assets/images/mega-menu/03.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Pricing</p>
                                                                                <span>Hostie provide pro price</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/affiliate">
                                                                            <img
                                                                                src="/assets/images/mega-menu/02.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Affiliate</p>
                                                                                <span>provide detailed explan</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/sign-up">
                                                                            <img
                                                                                src="/assets/images/mega-menu/04.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Sign Up</p>
                                                                                <span>Create content by you</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/blog">
                                                                            <img
                                                                                src="/assets/images/mega-menu/07.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Blog</p>
                                                                                <span>Read Hostie artical</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <ul className="mega-menu-item">
                                                                    <li>
                                                                        <Link to="/support">
                                                                            <img
                                                                                src="/assets/images/mega-menu/08.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Support</p>
                                                                                <span>Provide detailed explan</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>

                                                                    {/* added some fixing */}
                                                                    <li>
                                                                        <Link to="/pricing-two">
                                                                            <img
                                                                                src="/assets/images/mega-menu/03.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Pricing Package</p>
                                                                                <span>Hostie provide pro price</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/business-mail">
                                                                            <img
                                                                                src="/assets/images/mega-menu/10.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Business Mail</p>
                                                                                <span>Provide detailed explan</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/sign-in">
                                                                            <img
                                                                                src="/assets/images/mega-menu/09.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Sign In</p>
                                                                                <span>Login Account</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/blog-list">
                                                                            <img
                                                                                src="/assets/images/mega-menu/07.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Blog List</p>
                                                                                <span>Read Hostie artical</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <ul className="mega-menu-item">
                                                                    <li>
                                                                        <Link to="/domain-checker">
                                                                            <img
                                                                                src="/assets/images/mega-menu/12.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Domain Checker</p>
                                                                                <span>Provide detailed explain</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/pricing-three">
                                                                            <img
                                                                                src="/assets/images/mega-menu/03.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Pricing Comparision</p>
                                                                                <span>Hostie provide pro price</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/partner">
                                                                            <img
                                                                                src="/assets/images/mega-menu/06.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Partner</p>
                                                                                <span>Our partners</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/game-details">
                                                                            <img
                                                                                src="/assets/images/mega-menu/21.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Game Details</p>
                                                                                <span>We will be soon</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/blog-grid">
                                                                            <img
                                                                                src="/assets/images/mega-menu/07.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Blog Grid</p>
                                                                                <span>Read Hostie artical</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <ul className="mega-menu-item">
                                                                    <li>
                                                                        <Link to="/contact">
                                                                            <img
                                                                                src="/assets/images/mega-menu/16.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Contact</p>
                                                                                <span>Contact with Hostie</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/payment-method">
                                                                            <img
                                                                                src="/assets/images/mega-menu/20.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Payment Method</p>
                                                                                <span>Payment Method</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/domain-transfer">
                                                                            <img
                                                                                src="/assets/images/mega-menu/17.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Domain Transfer</p>
                                                                                <span>provide detailed explan</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/knowledgebase">
                                                                            <img
                                                                                src="/assets/images/mega-menu/11.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Knowledgebase</p>
                                                                                <span>Read Hostie article</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/blog/1">
                                                                            <img
                                                                                src="/assets/images/mega-menu/07.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Blog Details</p>
                                                                                <span>Read Hostie artical</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="menu-item hostie-has-dropdown mega-menu">
                                                <Link to="#" className="hostie-dropdown-main-element">
                                                    Hosting
                                                </Link>
                                                <div className="rts-mega-menu">
                                                    <div className="wrapper">
                                                        <div className="row g-0">
                                                            <div className="col-lg-6">
                                                                <ul className="mega-menu-item">
                                                                    <li>
                                                                        <Link to="/shared-hosting">
                                                                            <img
                                                                                src="/assets/images/mega-menu/22.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Shared Hosting</p>
                                                                                <span>Manage Shared Hosting</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/wordpress-hosting">
                                                                            <img
                                                                                src="/assets/images/mega-menu/23.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>WordPress Hosting</p>
                                                                                <span>WordPress Hosting speed</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/vps-hosting">
                                                                            <img
                                                                                src="/assets/images/mega-menu/24.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>VPS Hosting</p>
                                                                                <span>Dedicated resources</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <ul className="mega-menu-item">
                                                                    <li>
                                                                        <Link to="/reseller-hosting">
                                                                            <img
                                                                                src="/assets/images/mega-menu/25.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Reseller Hosting</p>
                                                                                <span>Earn additional revenue</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/dedicated-hosting">
                                                                            <img
                                                                                src="/assets/images/mega-menu/27.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Dedicated Hosting</p>
                                                                                <span>Hosting that gives you tools</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/cloud-hosting">
                                                                            <img
                                                                                src="/assets/images/mega-menu/29.svg"
                                                                                alt="icon"
                                                                            />
                                                                            <div className="info">
                                                                                <p>Cloud Hosting</p>
                                                                                <span>Manage Cloud Hosting</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="menu-item hostie-has-dropdown">
                                                <Link to="#" className="hostie-dropdown-main-element">
                                                    Domain
                                                </Link>
                                                <ul className="hostie-submenu list-unstyled menu-pages">
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/domain-checker">
                                                            Domain Checker
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/domain-transfer">
                                                            Domain Transfer
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/domain-registration">
                                                            Domain Resigtration
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item hostie-has-dropdown">
                                                <Link to="#" className="hostie-dropdown-main-element">
                                                    Technology
                                                </Link>
                                                <ul className="hostie-submenu list-unstyled menu-pages">
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/technology">
                                                            Technology
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/data-center">
                                                            Data Centers
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/game-details">
                                                            Game Details
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item hostie-has-dropdown">
                                                <Link to="#" className="hostie-dropdown-main-element">
                                                    Help Center
                                                </Link>
                                                <ul className="hostie-submenu list-unstyled menu-pages">
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/faq">
                                                            FAQ
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/support">
                                                            Support
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/contact">
                                                            Contact
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/knowledgebase">
                                                            Knowledgebase
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                {/* FOR HEADER RIGHT */}
                                <div className="rts-header__right">
                                    <Link
                                        to="https://hostie-whmcs.themewant.com/"
                                        className="login__btn"
                                        target="_blank"
                                    >
                                        Client Area
                                    </Link>
                                    <button id="menu-btn" className="mobile__active menu-btn" onClick={toggleSidebar}>
                                        <i className="fa-sharp fa-solid fa-bars" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <SideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    )
}

export default HeaderTen
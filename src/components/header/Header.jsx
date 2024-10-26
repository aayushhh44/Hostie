import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import SideMenu from '../SideMenu';


function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const [isSticky, setIsSticky] = useState(false);
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
            <header className={`rts-header style-one header__default ${isSticky ? 'header-sticky' : ''}`}>
                {/* HEADER TOP AREA */}
                <div className="rts-ht rts-ht__bg">
                    <div className="container">
                        <div className="row">
                            <div className="rts-ht__wrapper">
                                <div className="rts-ht__email">
                                    <Link to="mailto:info@hostie.com">
                                        <img src="/assets/images/icon/email.svg" alt="" className="icon" />
                                        support@zouztech.com.au
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
                                            +61 03 9000 8778
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
                <div className="container">
                    <div className="row">
                        <div className="rts-header__wrapper">
                            {/* FOR LOGO */}
                            <div className="rts-header__logo">
                                <Link to="/" className="site-logo">
                                    <img
                                        className="logo-white"
                                        src="/assets/images/logo/logo.png"
                                        alt="Zouz Tech"
                                    />
                                    <img
                                        className="logo-dark"
                                        src="/assets/images/logo/logodark.png"
                                        alt="Zouz Tech"
                                    />
                                </Link>
                            </div>
                            {/* FOR NAVIGATION MENU */}
                            <nav className="rts-header__menu" id="mobile-menu">
                                <div className="hostie-menu">
                                    <ul className="list-unstyled hostie-desktop-menu">
                                        <li className="menu-item hostie-has-dropdown">
                                            {/* <Link to="#" className="hostie-dropdown-main-element">
                                                Home
                                            </Link> */}
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
                                                        Register Domain
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/domain-registration">
                                                        Transfer a Domain
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item hostie-has-dropdown mega-menu">
                                            <Link to="#" className="hostie-dropdown-main-element">
                                                Website and Hosting
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
                                                                            <p>DIY website builder </p>
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
                                                                            <p>SEO Services</p>
                                                                            <span>Manage Cloud Hosting</span>
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
                                                                            <p>SSL Certificate</p>
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
                                                Emails
                                            </Link>
                                            <ul className="hostie-submenu list-unstyled menu-pages">
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/domain-checker">
                                                        Emails Hosting
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/domain-transfer">
                                                       Google Workspace
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/domain-registration">
                                                        Microsoft 365
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* <li className="menu-item hostie-has-dropdown">
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
                                            </ul>
                                        </li> */}
                                        <li className="menu-item hostie-has-dropdown">
                                            <Link to="#" className="hostie-dropdown-main-element">
                                                Help Center
                                            </Link>
                                            <ul className="hostie-submenu list-unstyled menu-pages">
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/faq">
                                                        Support
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/support">
                                                    About Zouz Tech 
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

                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/technology">
                                                       Technology
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            {/* FOR HEADER RIGHT */}
                            <MenuButton toggleSidebar={toggleSidebar} />
                        </div>
                    </div>
                </div>
            </header>
            <SideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        </>
    )
}

export default Header
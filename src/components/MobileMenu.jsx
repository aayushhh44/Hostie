import React from 'react'
import { Link } from 'react-router-dom'
import MetisMenu from 'react-metismenu';
function MobileMenu() {
    const menuData = [
        {
            label: 'Home',
            icon: 'home',
            content: [
                { label: 'Home One', to: '/home' },
                { label: 'Home Two', to: '/home-two' },
                { label: 'Home Three', to: '/home-three' },
                { label: 'Home Four', to: '/home-four' },
                { label: 'Home Five', to: '/home-five' },
                { label: 'Home Six', to: '/home-six' },
                { label: 'Game Hosting', to: '/home-sevent' },
                { label: 'Cloud Hosting', to: '/home-eight' },
                { label: 'WP Hosting', to: '/home-nine' },
                { label: 'Mern Hosting', to: '/home-ten' },
                { label: 'Premium Hosting', to: '/home-eleven' },
            ],
        },
        {
            label: 'Pages',
            icon: 'file',
            content: [
                { label: 'About', to: '/about' },
                { label: 'Affiliate', to: '/team' },
                { label: 'Pricing', to: '/faq' },
                { label: 'Sign Up', to: '/book-a-demo' },
                { label: 'Whois', to: '/free-audit' },
                { label: 'Partner', to: '/pricing' },
                { label: 'Blog', to: '/blog' },
                { label: 'Blog List', to: '/blog-list' },
                { label: 'Blog Grid', to: '/blog-grid-2' },
                { label: 'Support', to: '/support' },
                { label: 'Pricing', to: '/pricing' },
                { label: 'Pricing Package', to: '/pricing-two' },
                { label: 'Pricing Comparison', to: '/pricing-three' },
                { label: 'Sign In', to: '/signin' },
                { label: 'Business Mail', to: '/business-mail' },
                { label: 'Knowledgebase', to: '/knowledgebase' },
                { label: 'Blog Details', to: '/blog-details' },
                { label: 'Domain Checker', to: '/domain-checker' },
                { label: 'SSL Certificates', to: '/ssl-certificate' },
                { label: 'Data Centers', to: '/data-center' },
                { label: 'Technology', to: '/technology' },
                { label: 'Contact', to: '/contact' },
                { label: 'Domain Transfer', to: '/domain-transfer' },
                { label: 'Payment Method', to: '/payment-method' },
            ],
        },
        {
            label: 'Hosting',
            icon: 'server',
            content: [
                { label: 'Shared Hosting', to: '/shared-hosting' },
                { label: 'WordPress Hosting', to: '/wordpress-hosting' },
                { label: 'VPS Hosting', to: '/vps-hosting' },
                { label: 'Reseller Hosting', to: '/reseller-hosting' },
                { label: 'Dedicated Hosting', to: '/dedicated-hosting' },
                { label: 'Cloud Hosting', to: '/cloud-hosting' },
            ],
        },
        {
            label: 'Domain',
            icon: 'globe',
            content: [
                { label: 'Domain Checker', to: '/domain-checker' },
                { label: 'Domain Transfer', to: '/domain-transfer' },
            ],
        },
        {
            label: 'Technology',
            icon: 'cogs',
            content: [
                { label: 'Technology', to: '/technology' },
                { label: 'Data Center', to: '/data-center' },
                { label: 'Game Details', to: '/game-details' },
            ],
        },
        {
            label: 'Help Center',
            icon: 'question-circle',
            content: [
                { label: 'Knowledgebase', to: '/knowledgebase' },
                { label: 'Ads Banner', to: '/hosting-offer-one' },
                { label: 'Whois', to: '/whois' },
                { label: 'Support', to: '/support' },
                { label: 'Contact', to: '/contact' },
            ],
        },
    ];

    return (
        <>
            {/* mobile menu area start */}
            <div className="mobile-menu-main">
                <nav className="nav-main mainmenu-nav mt--30">
                    <MetisMenu content={menuData} activeLinkFromLocation />
                </nav>

                <ul className="social-area-one pl--20 mt--100">
                    <li>
                        <Link
                            to="https://www.linkedin.com"
                            aria-label="social-link"
                            target="_blank"
                        >
                            <i className="fa-brands fa-linkedin" />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.x.com" aria-label="social-link" target="_blank">
                            <i className="fa-brands fa-twitter" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="https://www.youtube.com"
                            aria-label="social-link"
                            target="_blank"
                        >
                            <i className="fa-brands fa-youtube" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="https://www.facebook.com"
                            aria-label="social-link"
                            target="_blank"
                        >
                            <i className="fa-brands fa-facebook-f" />
                        </Link>
                    </li>
                </ul>
            </div>
            {/* mobile menu area end */}
        </>
    )
}

export default MobileMenu

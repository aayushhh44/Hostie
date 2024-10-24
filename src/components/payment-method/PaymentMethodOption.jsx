import React from 'react'
import { Link } from 'react-router-dom'

function PaymentMethodOption() {
    return (
        <>
            <section className="rts-payment-option section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="rts-section w-440 text-center">
                            <h2
                                className="rts-section__title"
                                data-sal="slide-down"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
                                Payment Options
                            </h2>
                            <p
                                className="rts-section__description"
                                data-sal="slide-down"
                                data-sal-delay={300}
                                data-sal-duration={800}
                            >
                                We accept a variety of credit and debit cards, e-wallets, and a wide
                                range of cryptocurrencies.
                            </p>
                        </div>
                    </div>
                    <div className="section-inner">
                        <div className="row g-5 justify-content-center">
                            <div className="col-lg-6">
                                <div className="payment-method-wrapper">
                                    <h3 className="heading-title">Credit and Debit Cards</h3>
                                    <ul className="brand-area">
                                        <li>
                                            <Link to="#">
                                                <img src="assets/images/payment/visa.png" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img src="assets/images/payment/master-card.png" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img src="assets/images/payment/discover.png" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img src="assets/images/payment/diners-club.png" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img src="assets/images/payment/maestro.png" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img
                                                    src="assets/images/payment/american-express.png"
                                                    alt=""
                                                />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="payment-method-wrapper method-2">
                                    <h3 className="heading-title">E-Wallets</h3>
                                    <ul className="brand-area">
                                        <li>
                                            <Link to="#">
                                                <img src="assets/images/payment/paypal.png" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img src="assets/images/payment/amazon.png" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img src="assets/images/payment/skrill.png" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img src="assets/images/payment/wise.png" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img src="assets/images/payment/ebay.png" alt="" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="payment-method-wrapper method-3">
                                    <h3 className="heading-title">Credit and Debit Cards</h3>
                                    <ul className="brand-area">
                                        <li>
                                            <Link to="#">
                                                <img src="assets/images/payment/bitcoin.png" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img src="assets/images/payment/tron.png" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img src="assets/images/payment/ethereum.png" alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img src="assets/images/payment/litecoin.png" alt="" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default PaymentMethodOption
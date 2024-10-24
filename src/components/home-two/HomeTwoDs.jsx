import React from 'react'

function HomeTwoDs() {
    return (
        <>
            <div className="rts-ds-two cultured__white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rts-ds-two__wrapper">
                                <form
                                    action="https://hostie-whmcs.themewant.com/cart.php"
                                    className="domain-search"
                                >
                                    <input type="hidden" name="domain" defaultValue="register" />
                                    <input type="hidden" name="a" defaultValue="add" />
                                    <input
                                        type="text"
                                        placeholder="domain.com"
                                        name="query"
                                        required=""
                                    />
                                    <button
                                        type="submit"
                                        name="domain_type"
                                        className="domain-btn rts-btn-secondary"
                                    >
                                        Search Domain
                                    </button>
                                </form>
                                <div className="rts-ds-two__domainlist">
                                    <div className="single-list">
                                        <div className="name">.com</div>
                                        <span className="price">only $6.19</span>
                                    </div>
                                    <div className="single-list">
                                        <div className="name">.net</div>
                                        <span className="price">only $6.19</span>
                                    </div>
                                    <div className="single-list">
                                        <div className="name">.org</div>
                                        <span className="price">only $6.19</span>
                                    </div>
                                    <div className="single-list">
                                        <div className="name">.store</div>
                                        <span className="price">only $6.19</span>
                                    </div>
                                    <div className="single-list">
                                        <div className="name">.info</div>
                                        <span className="price">only $6.19</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeTwoDs
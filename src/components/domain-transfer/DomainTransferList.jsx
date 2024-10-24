import React from 'react'

function DomainTransferList() {
    return (
        <>
            <div className="rts-transfer-price-table alice__blue section__padding">
                <div className="container">
                    <div className="row">
                        <div className="row justify-content-center">
                            <div className="rts-section w-450 text-center">
                                <h2
                                    className="rts-section__title "
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    Check Our Domain Transfer Prices
                                </h2>
                            </div>
                        </div>
                    </div>
                    {/* transfer rate table */}
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="transfer-domain-table">
                                <table className="table table-responsive transfer-domain">
                                    <thead className="heading__bg">
                                        <tr>
                                            <th className="cell">Domains</th>
                                            <th className="cell text-center">Transfer / Renewal Price</th>
                                            <th className="cell text-center">Privacy Protection</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table__content">
                                        <tr>
                                            <td className="tld">.com</td>
                                            <td className="price text-center">
                                                <h5 className="transfer">$8.99 /year</h5>
                                                <p className="renew">Renewal Price $15.99 /year</p>
                                            </td>
                                            <td className="protection text-center">
                                                <i className="fa-regular fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tld">.net</td>
                                            <td className="price text-center">
                                                <h5 className="transfer">$8.99 /year</h5>
                                                <p className="renew">Renewal Price $15.99 /year</p>
                                            </td>
                                            <td className="protection text-center">
                                                <i className="fa-regular fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tld">.xyz</td>
                                            <td className="price text-center">
                                                <h5 className="transfer">$8.99 /year</h5>
                                                <p className="renew">Renewal Price $15.99 /year</p>
                                            </td>
                                            <td className="protection text-center">
                                                <i className="fa-regular fa-xmark" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tld">.online</td>
                                            <td className="price text-center">
                                                <h5 className="transfer">$8.99 /year</h5>
                                                <p className="renew">Renewal Price $15.99 /year</p>
                                            </td>
                                            <td className="protection text-center">
                                                <i className="fa-regular fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tld">.pw</td>
                                            <td className="price text-center">
                                                <h5 className="transfer">$8.99 /year</h5>
                                                <p className="renew">Renewal Price $15.99 /year</p>
                                            </td>
                                            <td className="protection text-center">
                                                <i className="fa-regular fa-check" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DomainTransferList
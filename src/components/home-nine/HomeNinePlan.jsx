import React from 'react'

function HomeNinePlan() {
    return (
        <>
            <section className="rts-plan wp__hosting__option section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="rts-section text-center w-560">
                            <h3
                                className="rts-section__title"
                                data-sal="slide-down"
                                data-sal-delay={300}
                                data-sal-duration={800}
                            >
                                Choose Your Web Hosting Plan
                            </h3>
                            <p
                                className="rts-section__description"
                                data-sal="slide-down"
                                data-sal-delay={400}
                                data-sal-duration={800}
                            >
                                Shared hosting is the easiest, most economical way to get your website
                                connected to the Internet so you can start building it.
                            </p>
                        </div>
                    </div>
                    {/* PLAN */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rts-plan__table">
                                <table className="table-bordered">
                                    {/* thead */}
                                    <thead>
                                        <tr>
                                            <th className="package__left">
                                                <img src="assets/images/pricing/pricing-image.svg" alt="" />
                                            </th>
                                            {/* package one */}
                                            <th className="package__item">
                                                <div className="package__item__info">
                                                    <span className="package__type">Basic</span>
                                                    <span className="start">Starting at $3.75/mo*</span>
                                                    <form action="#">
                                                        <select
                                                            name="select"
                                                            id="select"
                                                            className="price__select"
                                                        >
                                                            <option value={1}>$3.75/mo</option>
                                                            <option value={1}>$10.75/yr</option>
                                                        </select>
                                                        <button
                                                            type="submit"
                                                            className="primary__btn primary__bg buy__now"
                                                        >
                                                            By Now
                                                        </button>
                                                    </form>
                                                </div>
                                            </th>
                                            {/* top-right-corner */}
                                            <th className="package__item">
                                                {/* table-title-3 */}
                                                <div className="package__item__info">
                                                    <span className="package__type">Deluxe</span>
                                                    <span className="start">Starting at $3.75/mo*</span>
                                                    <form action="#">
                                                        <select
                                                            name="select"
                                                            id="select1"
                                                            className="price__select"
                                                        >
                                                            <option value={1}>$3.75/mo</option>
                                                            <option value={1}>$10.75/yr</option>
                                                        </select>
                                                        <button
                                                            type="submit"
                                                            className="primary__btn primary__bg buy__now"
                                                        >
                                                            By Now
                                                        </button>
                                                    </form>
                                                </div>
                                            </th>
                                            {/* top-right-corner */}
                                            <th className="package__item">
                                                <div className="package__item__info">
                                                    <span className="package__type">Ultra</span>
                                                    <span className="start">Starting at $3.75/mo*</span>
                                                    <form action="#">
                                                        <select
                                                            name="select"
                                                            id="select2"
                                                            className="price__select"
                                                        >
                                                            <option value={1}>$3.75/mo</option>
                                                            <option value={1}>$10.75/yr</option>
                                                        </select>
                                                        <button
                                                            type="submit"
                                                            className="primary__btn primary__bg buy__now"
                                                        >
                                                            By Now
                                                        </button>
                                                    </form>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    {/* tbody */}
                                    <tbody>
                                        {/* hardware */}
                                        <tr data-filter="hardware" className="">
                                            <td className="package__left">Websites</td>
                                            <td className="package__item">1</td>
                                            <td className="package__item">Unlimited</td>
                                            <td className="package__item">Unlimited</td>
                                        </tr>
                                        <tr data-filter="hardware" className="">
                                            <td className="package__left">Disk storage</td>
                                            <td className="package__item">Unlimited</td>
                                            <td className="package__item">Unlimited</td>
                                            <td className="package__item">Unlimited</td>
                                        </tr>
                                        <tr data-filter="hardware" className="">
                                            <td className="package__left">Bandwidth</td>
                                            <td className="package__item">Scaleable</td>
                                            <td className="package__item">Scaleable</td>
                                            <td className="package__item">Scaleable</td>
                                        </tr>
                                        <tr data-filter="hardware" className="">
                                            <td className="package__left">FTP users</td>
                                            <td className="package__item">6</td>
                                            <td className="package__item">27</td>
                                            <td className="package__item">Unlimited</td>
                                        </tr>
                                        <tr data-filter="hardware" className="">
                                            <td className="package__left">MySQL databases</td>
                                            <td className="package__item">10</td>
                                            <td className="package__item">27</td>
                                            <td className="package__item">Unlimited</td>
                                        </tr>
                                        <tr data-filter="hardware" className="">
                                            <td className="package__left">Free SSl certificate</td>
                                            <td className="package__item">
                                                <i className="fa-regular fa-check" />
                                            </td>
                                            <td className="package__item">
                                                <i className="fa-regular fa-check" />
                                            </td>
                                            <td className="package__item">
                                                <i className="fa-regular fa-check" />
                                            </td>
                                        </tr>
                                        <tr data-filter="hardware" className="">
                                            <td className="package__left">
                                                Free Domain for the first year
                                            </td>
                                            <td className="package__item">
                                                <i className="fa-regular fa-check" />
                                            </td>
                                            <td className="package__item">
                                                <i className="fa-regular fa-check" />
                                            </td>
                                            <td className="package__item">
                                                <i className="fa-regular fa-check" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeNinePlan
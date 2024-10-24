import React from 'react'

function KnowledgebaseTab() {
    return (
        <>
            <>
                {/* KNOWLEDGE BASE ITEM */}
                <div className="rts-knowledgebase pt--120 pb--60">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-xl-4 col-lg-5">
                                <div className="rts-sidebar">
                                    <div className="rts-single-widget category-widget knowledge__tab__section">
                                        <h4 className="widget-title">Knowledgebase</h4>
                                        <ul
                                            className="list-unstyled cat__counter nav nav-tabs"
                                            id="myTab"
                                            role="tablist"
                                        >
                                            <li className="single-cat nav-item" role="presentation">
                                                <button
                                                    className="button-tab"
                                                    id="share-hosting"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#share-hosting-tab"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="share-hosting"
                                                    aria-selected="true"
                                                    tabIndex={0}
                                                >
                                                    Share Hosting <span>(10)</span>
                                                </button>
                                            </li>
                                            <li className="single-cat nav-item" role="presentation">
                                                <button
                                                    className="button-tab"
                                                    id="ssl"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#ssl-tab"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="ssl"
                                                    aria-selected="false"
                                                    tabIndex={0}
                                                >
                                                    Certificates SSL <span>(5)</span>
                                                </button>
                                            </li>
                                            <li className="single-cat nav-item" role="presentation">
                                                <button
                                                    className="button-tab"
                                                    id="domain-transfer"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#domain-transfer-tab"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="domain-transfer"
                                                    aria-selected="false"
                                                    tabIndex={0}
                                                >
                                                    Domain Transfers <span>(5)</span>
                                                </button>
                                            </li>
                                            <li className="single-cat nav-item" role="presentation">
                                                <button
                                                    className="button-tab"
                                                    id="cloud-hosting"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#cloud-hosting-tab"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="cloud-hosting"
                                                    aria-selected="false"
                                                    tabIndex={0}
                                                >
                                                    Cloud VPS <span>(5)</span>
                                                </button>
                                            </li>
                                            <li className="single-cat nav-item" role="presentation">
                                                <button
                                                    className="button-tab"
                                                    id="dedicated"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#dedicated-tab"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="dedicated"
                                                    aria-selected="false"
                                                    tabIndex={0}
                                                >
                                                    Dedicated Servers <span>(5)</span>
                                                </button>
                                            </li>
                                            <li className="single-cat nav-item" role="presentation">
                                                <button
                                                    className="button-tab"
                                                    id="email-service"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#email-service-tab"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="email-service"
                                                    aria-selected="false"
                                                    tabIndex={0}
                                                >
                                                    Email Service <span>(5)</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-7">
                                <div className="tab-content" id="myTabContent">
                                    <div
                                        className="tab-pane fade active show knowledge__content"
                                        id="share-hosting-tab"
                                        role="tabpanel"
                                        aria-labelledby="share-hosting"
                                    >
                                        <div className="content-list">
                                            <div className="single-content">
                                                <h5>Share Hosting</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Certificates SSL</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Domain Transfers </h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Cloud VPS</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Dedicated Servers</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane  fade knowledge__content"
                                        id="ssl-tab"
                                        role="tabpanel"
                                        aria-labelledby="ssl"
                                    >
                                        <div className="content-list">
                                            <div className="single-content">
                                                <h5>Share Hosting</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Certificates SSL</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Domain Transfers </h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Cloud VPS</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Dedicated Servers</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane  fade knowledge__content"
                                        id="domain-transfer-tab"
                                        role="tabpanel"
                                        aria-labelledby="domain-transfer"
                                    >
                                        <div className="content-list">
                                            <div className="single-content">
                                                <h5>Share Hosting</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Certificates SSL</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Domain Transfers </h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Cloud VPS</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Dedicated Servers</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade  knowledge__content"
                                        id="cloud-hosting-tab"
                                        role="tabpanel"
                                        aria-labelledby="cloud-hosting"
                                    >
                                        <div className="content-list">
                                            <div className="single-content">
                                                <h5>Share Hosting</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Certificates SSL</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Domain Transfers </h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Cloud VPS</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Dedicated Servers</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade  knowledge__content"
                                        id="dedicated-tab"
                                        role="tabpanel"
                                        aria-labelledby="dedicated"
                                    >
                                        <div className="content-list">
                                            <div className="single-content">
                                                <h5>Share Hosting</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Certificates SSL</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Domain Transfers </h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Cloud VPS</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Dedicated Servers</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade  knowledge__content"
                                        id="email-service-tab"
                                        role="tabpanel"
                                        aria-labelledby="email-service"
                                    >
                                        <div className="content-list">
                                            <div className="single-content">
                                                <h5>Share Hosting</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Certificates SSL</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Domain Transfers </h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Cloud VPS</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                            <div className="single-content">
                                                <h5>Dedicated Servers</h5>
                                                <p className="icon-text">
                                                    <span>
                                                        <i className="fa-regular fa-file-lines" />
                                                    </span>
                                                    How to Create, Update, and Delete a Project?
                                                </p>
                                                <p>
                                                    A comprehensive guide on how you can create, update, and
                                                    delete a project on the Cloudways platform.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* KNOWLEDGE BASE ITEM END */}
            </>

        </>
    )
}

export default KnowledgebaseTab
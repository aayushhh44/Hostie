import React from 'react'
import { Link } from 'react-router-dom'

function HomeSevenGameCollection() {
    return (
        <>
            <div className="game-collection section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="rts-section text-center">
                                <h2
                                    className="rts-section__title"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    Our Game Collection
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="game__tab">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button
                                        className="nav-link active"
                                        data-bs-toggle="tab"
                                        data-bs-target="#all-games"
                                        type="button"
                                        role="tab"
                                        aria-controls="all-games"
                                        aria-selected="true"
                                    >
                                        All Games
                                    </button>
                                    <button
                                        className="nav-link"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-action"
                                        aria-controls="nav-action"
                                    >
                                        Action
                                    </button>
                                    <button
                                        className="nav-link"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-strategy"
                                        aria-controls="nav-strategy"
                                    >
                                        Strategy
                                    </button>
                                    <button
                                        className="nav-link"
                                        data-bs-toggle="tab"
                                        data-bs-target="#puzzle"
                                        type="button"
                                        role="tab"
                                        aria-controls="puzzle"
                                        aria-selected="true"
                                    >
                                        Puzzle
                                    </button>
                                    <button
                                        className="nav-link"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-horror"
                                        aria-controls="nav-horror"
                                    >
                                        Horror
                                    </button>
                                    <button
                                        className="nav-link"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-multiplayer"
                                        aria-controls="nav-multiplayer"
                                    >
                                        Multi Player
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="all-games" role="tabpanel">
                            <div className="row g-5">
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/01.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Legacy of the Stars</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/02.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Nebula Nexus</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/03.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Shadowrealm Saga</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/04.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Warzone Assault</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/05.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Eternal Odyssey</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/06.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Magic and Mystery</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/07.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Reign of Fire</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="old__pricing">$59.00</span>
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/08.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Guardians of the Cosmos</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-action" role="tabpanel">
                            <div className="row g-5">
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/01.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Legacy of the Stars</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/02.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Nebula Nexus</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/03.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Shadowrealm Saga</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/04.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Warzone Assault</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/05.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Eternal Odyssey</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/06.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Magic and Mystery</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/07.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Reign of Fire</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="old__pricing">$59.00</span>
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/08.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Guardians of the Cosmos</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-strategy" role="tabpanel">
                            <div className="row g-5">
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/01.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Legacy of the Stars</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/02.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Nebula Nexus</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/03.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Shadowrealm Saga</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/04.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Warzone Assault</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/05.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Eternal Odyssey</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/06.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Magic and Mystery</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/07.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Reign of Fire</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="old__pricing">$59.00</span>
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/08.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Guardians of the Cosmos</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="puzzle" role="tabpanel">
                            <div className="row g-5">
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/01.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Legacy of the Stars</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/02.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Nebula Nexus</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/03.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Shadowrealm Saga</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/04.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Warzone Assault</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/05.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Eternal Odyssey</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/06.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Magic and Mystery</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/07.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Reign of Fire</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="old__pricing">$59.00</span>
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/08.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Guardians of the Cosmos</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-horror" role="tabpanel">
                            <div className="row g-5">
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/01.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Legacy of the Stars</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/02.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Nebula Nexus</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/03.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Shadowrealm Saga</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/04.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Warzone Assault</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/05.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Eternal Odyssey</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/06.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Magic and Mystery</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/07.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Reign of Fire</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="old__pricing">$59.00</span>
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/08.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Guardians of the Cosmos</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-multiplayer" role="tabpanel">
                            <div className="row g-5">
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/01.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Legacy of the Stars</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/02.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Nebula Nexus</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/03.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Shadowrealm Saga</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/04.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Warzone Assault</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/05.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Eternal Odyssey</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/06.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Magic and Mystery</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/07.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Reign of Fire</Link>
                                                </h4>
                                                <div className="game__single__box__meta__flex">
                                                    <div className="game__single__box__meta--pricing">
                                                        <span className="old__pricing">$59.00</span>
                                                        <span className="current__pricing">$29.00</span>
                                                    </div>
                                                    <div className="game__single__box__meta__rating">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                                {/* single game */}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game__single">
                                        <div className="game__single__box">
                                            <div className="game__single__box__image">
                                                <Link to="/game-details">
                                                    <img src="assets/images/game/collection/08.jpg" alt="" />
                                                </Link>
                                                <div className="game__single__box__image__meta">
                                                    <div className="off">50% off</div>
                                                    <Link to="/game-details" className="cart__btn">
                                                        <i className="fa-light fa-cart-shopping" /> Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="game__single__box__meta">
                                                <h4 className="game__single__box__meta--title">
                                                    <Link to="/game-details">Guardians of the Cosmos</Link>
                                                </h4>
                                                <div className="game__single__box__meta--pricing">
                                                    <span className="old__pricing">$59.00</span>
                                                    <span className="current__pricing">$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* single game end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeSevenGameCollection
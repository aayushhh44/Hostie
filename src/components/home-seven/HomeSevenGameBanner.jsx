import React from 'react'
import { Link } from 'react-router-dom'

function HomeSevenGameBanner() {
    return (
        <>
            <div className="game-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="game__banner__content"
                                style={{ backgroundImage: "url(assets/images/game/banner__bg.png)" }}
                            >
                                <div className="game__banner__content__box">
                                    <div className="game__banner__content__box--purchase">
                                        <span>
                                            <img src="assets/images/icon/game.svg" alt="" />
                                        </span>
                                        Purchase Game
                                    </div>
                                    <h2 className="game__banner__content__box--title">
                                        Explore New Worlds: Create Your Own Saga
                                    </h2>
                                    <p className="game__banner__content__box--description">
                                        Welcome to a world where adventure awaits at every turn. Immerse
                                        yourself in epic battles, thrilling challenges, and boundless
                                        excitement as you embark on a journey like no other.
                                    </p>
                                    <div className="game__banner__content__box--button">
                                        <Link to="/pricing" className="primary__btn ">
                                            Purchase Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="game__banner__content__image">
                                    <img
                                        src="assets/images/game/banner__image.png"
                                        alt="banner__image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeSevenGameBanner
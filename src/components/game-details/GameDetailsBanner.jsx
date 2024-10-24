import React, { useEffect } from 'react'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
function GameDetailsBanner() {
    useEffect(() => {
        sal({
            threshold: 0.1,
            once: true,
        });
    }, []);
    return (
        <>
            <section className="rts-game-details pt--150 pb-120">
                <div className="container">
                    <div className="row g-5 justify-content-center align-items-center">
                        <div className="col-lg-4 col-md-5 col-sm-10">
                            <div className="game__details--img">
                                <img src="assets/images/game/collection/01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 col-sm-10">
                            <div className="game__details--content">
                                <div className="game__details--content__cat">
                                    <Link to="#">Action</Link>
                                </div>
                                <h2 className="game__details--content__title">Legacy of the Stars</h2>
                                <p className="game__details--content__details">
                                    Legacy of the Stars" is an epic role-playing game set in a vast
                                    universe teeming with celestial wonders, ancient mysteries, and
                                    cosmic conflicts. Players take on the roles of intrepid spacefarers,
                                    exploring the far reaches of the galaxy, uncovering lost
                                    civilizations, and shaping the fate of entire star systems.
                                </p>
                                <div className="game__details--content__rating">
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
            </section>

        </>
    )
}

export default GameDetailsBanner
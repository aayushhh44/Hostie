import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function HomeSevenPopularGame() {
    useEffect(() => {
		sal({
			threshold: 0.1,
			once: true,
		});
	}, []);
    return (
        <>
            <div className="popular-game section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="rts-section text-center">
                            <div className="rts-section__two">
                                <h2
                                    className="title"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    Popular Game Server
                                </h2>
                                <p
                                    className="rts-section-description"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    Choosing a game server hosting provider, consider factors such as
                                    server performance, reliability, customer support.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        {/* single server */}
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single__server">
                                <div className="single__server--content">
                                    <div className="single__server--content__icon">
                                        <img
                                            src="assets/images/icon/game-1.svg"
                                            width={73}
                                            height={73}
                                            alt=""
                                        />
                                    </div>
                                    <h4 className="single__server--content__link">
                                        <Link to="#">GameServers.com</Link>
                                    </h4>
                                    <p className="single__server--content__description">
                                        Provides game server hosting for a wide range of games, with
                                        options for dedicated and shared servers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* single server end */}
                        {/* single server */}
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single__server">
                                <div className="single__server--content">
                                    <div className="single__server--content__icon">
                                        <img
                                            src="assets/images/icon/game-2.svg"
                                            width={73}
                                            height={73}
                                            alt=""
                                        />
                                    </div>
                                    <h4 className="single__server--content__link">
                                        <Link to="#">Game Server Hosting</Link>
                                    </h4>
                                    <p className="single__server--content__description">
                                        Provide dedicated or shared servers optimized for hosting specific
                                        games or game types.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* single server end */}
                        {/* single server */}
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single__server">
                                <div className="single__server--content">
                                    <div className="single__server--content__icon">
                                        <img
                                            src="assets/images/icon/game-3.svg"
                                            width={73}
                                            height={73}
                                            alt=""
                                        />
                                    </div>
                                    <h4 className="single__server--content__link">
                                        <Link to="#">Dedicated Server Rental</Link>
                                    </h4>
                                    <p className="single__server--content__description">
                                        Offer dedicated servers exclusively for users' gaming needs,
                                        providing full control and customization options.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* single server end */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeSevenPopularGame
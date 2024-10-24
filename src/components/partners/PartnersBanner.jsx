import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function PartnersBanner() {
  useEffect(() => {
		sal({
			threshold: 0.1,
			once: true,
		});
	}, []);
  return (
    <>
      <div className="rts-hosting-banner rts-hosting-banner-bg banner-default-height">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-area">
                <div className="rts-hosting-banner rts-hosting-banner__content pricing__banner">
                  <span
                    className="starting__price"
                    data-sal="slide-down"
                    data-sal-delay={100}
                    data-sal-duration={800}
                  >
                    Partner
                  </span>
                  <h1
                    className="banner-title"
                    data-sal="slide-down"
                    data-sal-delay={200}
                    data-sal-duration={800}
                  >
                    Join Our Partner Program
                  </h1>
                  <div
                    className="feature mb-0"
                    data-sal="slide-down"
                    data-sal-delay={300}
                    data-sal-duration={800}
                  >
                    <ul className="feature__list">
                      <li className="feature__item">Up to 20% commissions</li>
                      <li className="feature__item">
                        Simple and secure access management
                      </li>
                    </ul>
                  </div>
                  <div className="hosting-action">
                    <Link
                      to="/pricing"
                      className="btn__two secondary__bg secondary__color"
                    >
                      Start Now <i className="fa-regular fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div className="rts-hosting-banner__image partner">
                  <img src="assets/images/banner/banner__partner__image.svg" alt="" />
                  <div className="shape__image">
                    <img
                      src="assets/images/banner/banner__partner__image-sm1.svg"
                      alt=""
                      className="shape__image--one"
                    />
                    <img
                      src="assets/images/banner/banner__partner__image-sm2.svg"
                      alt=""
                      className="shape__image--two"
                    />
                    <img
                      src="assets/images/banner/banner__partner__image-sm3.svg"
                      alt=""
                      className="shape__image--three left-right2"
                    />
                    <img
                      src="assets/images/banner/banner__partner__image-sm4.svg"
                      alt=""
                      className="shape__image--four show-hide"
                    />
                    <img
                      src="assets/images/banner/banner__partner__image-sm5.svg"
                      alt=""
                      className="shape__image--five left-right2"
                    />
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

export default PartnersBanner
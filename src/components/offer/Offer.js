import React from 'react'
import './offer.css'
const Offer = () => {
  return (
    <section className="service-area" id="service">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <div className="appie-section-title text-center">
                    <h3 className="appie-title">What We <span>Offer</span></h3>
                    <p>Praesent hendrerit, mi facilisis eleifend lobortis mi est hendrerit fringillaibus lorem, non fringilla du enet ante.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6">
                <div className="single-service text-center mt-30" data-wow-duration="2000ms" data-wow-delay="200ms">
                    <div className="icon">
                        <img src="assets/images/main-icon-with-text-img-1.png" alt="" />
                    </div>
                    <h4 className="appie-title">Engine Optimization</h4>
                    <hr className='line'/>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="single-service text-center mt-30" data-wow-duration="2000ms" data-wow-delay="200ms">
                    <div className="icon">
                        <img src="assets/images/main-icon-with-text-img-2.png" alt="" />
                    </div>
                    <h4 className="appie-title">Social media strategy</h4>
                    <hr className='line'/>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="single-service text-center mt-30" data-wow-duration="2000ms" data-wow-delay="200ms">
                    <div className="icon">
                        <img src="assets/images/main-icon-with-text-img-3.png" alt="" />
                    </div>
                    <h4 className="appie-title">Real time <br/> and data</h4>
                    <hr className='line'/>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="single-service text-center mt-30" data-wow-duration="2000ms" data-wow-delay="200ms">
                    <div className="icon">
                        <img src="assets/images/main-icon-with-text-img-4.png" alt="" />
                    </div>
                    <h4 className="appie-title">Online media management</h4>
                    <hr className='line'/>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Offer

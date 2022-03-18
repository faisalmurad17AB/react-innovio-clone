import React from 'react'

const Slider = () => {
    return (
        <section>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="assets/images/client-carousel-hover-img-1.png" className='w-50' alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/client-carousel-hover-img-1.png" className='w-50'  alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/client-carousel-hover-img-1.png" className='w-50'  alt="..." />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider

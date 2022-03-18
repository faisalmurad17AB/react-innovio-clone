import React from 'react'

const Hero = () => {
  return (
    <div className='hero vh-100 d-flex align-items-center' id='home'>
      <div className="container">
          <div className="row">
              <div className="col-md-7 mx-auto text-center">
                  <h1 className='d-4 text-white'>Build responsive landing pages now</h1>
                  <p className='text-white my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, esse accusamus reprehenderit magni ad minus, vero quasi ratione qui sit obcaecati perferendis assumenda nulla? Temporibus inventore harum minus repellendus quae?</p>
                  <a href="#" className='btn btn-primary me-2'>Get Started</a>
                  <a href="#" className='btn btn-outline-light'>Portfolio</a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Hero

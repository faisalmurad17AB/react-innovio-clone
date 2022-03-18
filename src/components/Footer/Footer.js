import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
          <div className="container">
              <div className="row gy-4">
                  <div className="col-md-4">
                      <img className='logo' src="assets/images/logo_white.png" alt="" />
                  </div>
                  <div className="col-md-2">
                      <h5 className='text-white'>Brand</h5>
                      <ul className='list-unstyled'>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Service</a></li>
                          <li><a href="#">Features</a></li>
                          <li><a href="#">Pricing</a></li>
                      </ul>
                  </div>
                  <div className="col-md-2">
                  <h5 className='text-white'>More</h5>
                      <ul className='list-unstyled'>
                          <li><a href="#">FAQ</a></li>
                          <li><a href="#">Privacy & Policy</a></li>
                          <li><a href="#">Warranty</a></li>
                          <li><a href="#">Shipping</a></li>
                      </ul>
                  </div>
                  <div className='col-md-4'>
                  <h5 className='text-white'>Contact</h5>
                      <ul className='list-unstyled'>
                          <li>Lahore</li>
                          <li>Email:<a href="#">abc@gmail.com</a></li>
                          <li>Phone: 03001234567</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer

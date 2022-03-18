import React from 'react'

const Blog = () => {
  return (
      <section id='blog' className='blog-section'>
      <div className="container">
          <div className="row mb-5">
              <div className="col-md-8 mx-auto text-center">
                  <h1>Our<span> Blogs</span></h1>
                  <p>Praesent hendrerit, mi facilisis eleifend
                    lobortis mi est hendrerit fringillaibus lorem,
                    nonfringilla dui enim et ante eleiz.</p>
              </div>
          </div>
           <div className="row">
                <div className="col-md-4">
                    <div className="blog-post card-effect">
                        <img src="assets/images/blog-post-img-4-650x650.jpg" alt="" />
                        <ul className='list-unstyled d-flex mt-2'>
                            <li className='me-2'><i class='bx bxs-calendar'></i></li>
                            <li>November 9, 2018</li>
                        </ul>
                        <h5 className='mt-3'><a href="#">The home of technology is in front of you</a> </h5>
                        <p>Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit,
                         sed diam nonum nibhie </p>
                         <a href="#">Read More <i class='bx bx-plus'></i></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blog-post card-effect">
                        <img src="assets/images/blog-post-img-5-650x650.jpg" alt="" />
                        <ul className='list-unstyled d-flex mt-2'>
                            <li className='me-2'><i class='bx bxs-calendar'></i></li>
                            <li>November 9, 2018</li>
                        </ul>
                        <h5 className='mt-3'><a href="#">The home of technology is in front of you</a></h5>
                        <p>Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit,
                         sed diam nonum nibhie </p>
                         <a href="#">Read More <i class='bx bx-plus'></i></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blog-post card-effect">
                        <img src="assets/images/blog-post-img-6-650x650.jpg" alt="" />
                        <ul className='list-unstyled d-flex mt-2'>
                            <li className='me-2'><i class='bx bxs-calendar'></i></li>
                            <li>November 9, 2018</li>
                        </ul>
                        <h5 className='mt-3'><a href="#">The home of technology is in front of you</a></h5>
                        <p>Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit,
                         sed diam nonum nibhie </p>
                         <a href="#">Read More <i class='bx bx-plus'></i></a>
                    </div>
                </div>
           </div>
      </div>
    </section>
  )
}

export default Blog

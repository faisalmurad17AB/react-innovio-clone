import React from 'react'

const Project = () => {
    return (
        <section id='project' className='project-section'>
            <div className="container-fluid">
                <div className="row mb-5">
                    <div className="col-md-8 mx-auto text-center">
                        <h1>Awesome <span>portfolio</span> </h1>
                        <p>Praesent hendrerit, mi facilisis eleifend lobortis mi est hendrerit 
                            fringillaibus lorem condimentum fringilla dui enim et ante.
                        </p>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src="assets/images/h1-port-img-1.jpg" alt="" />
                            <div className='overlay'>
                                <div>
                                    <h4 className='text-white'>Project Title</h4>
                                    <h6 className='text-white'>Website Design</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src="assets/images/h1-port-img-2.jpg" alt="" />
                            <div className='overlay'>
                                <div>
                                    <h4 className='text-white'>Project Title</h4>
                                    <h6 className='text-white'>Website Design</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src="assets/images/h1-port-img-3.jpg" alt="" />
                            <div className='overlay'>
                                <div>
                                    <h4 className='text-white'>Project Title</h4>
                                    <h6 className='text-white'>Website Design</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src="assets/images/main-item-showcase-img.png" alt="" />
                            <div className='overlay'>
                                <div>
                                    <h4 className='text-white'>Project Title</h4>
                                    <h6 className='text-white'>Website Design</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src="assets/images/cover.jpg" alt="" />
                            <div className='overlay'>
                                <div>
                                    <h4 className='text-white'>Project Title</h4>
                                    <h6 className='text-white'>Website Design</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src="assets/images/blog-post-img-5-650x650.jpg" alt="" />
                            <div className='overlay'>
                                <div>
                                    <h4 className='text-white'>Project Title</h4>
                                    <h6 className='text-white'>Website Design</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project

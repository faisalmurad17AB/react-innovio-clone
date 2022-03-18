import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg py-3  navbar-light bg-white">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img className='logo' src='assets/images/logo.png' alt='pic'/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                    
                            <li class="nav-item">
                                <a class="nav-link" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#feature">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#project">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#price">Price</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">ConatctUs</a>
                            </li>
                        </ul>
                        <i className='bx bx-search ms-3'></i>
                        <i className='bx bx-menu ms-3 menu'></i>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

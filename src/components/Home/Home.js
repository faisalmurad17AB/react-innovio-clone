import React from 'react'

const Home = () => {
  return (
   <section className='home-section'>
       <div className="container">
           <div className="row">
               <div className="col-md-5 my-5">
                   <h3>How to rule the web <br/> market</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam animi fuga dicta qui modi inventore earum doloremque,</p>
                   <button className='btn btn-primary'><a href=""></a> Get Started</button>
                   <button className='btn btn-secondary ms-3'>Learn More</button>
               </div>
               <div className="col-md-7">
                   <img src="assets/images/cover.jpg" className='home-img' alt="" />
               </div>
           </div>
       </div>
   </section>
  )
}

export default Home

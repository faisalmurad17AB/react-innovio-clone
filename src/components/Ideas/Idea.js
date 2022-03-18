import React from 'react'

const Idea = () => {
    return (
        <section className='row w-100' id='ideas'>

            <div className="col-lg-6 col-img">
                <img src='assets/images/main-item-showcase-img.png' />
            </div>
            <div className="col-lg-6 my-5">
                <h1 >Fresh, new ideas & bold<span> moves</span> </h1>
                <p>Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit praesent luptatum zril
                    delenit augue duis. Autem vel eum iriure dolor in hendrerit in vulputatev dolore eu feugiat nulla facilisis.</p>
                    <button className='btn btn-danger'>Read More</button>
            </div>
        </section>
    )
}

export default Idea


import React from 'react'

function Testimonials(props) {
    return <>
        <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src={`./img/${props.reviews.img}`} alt="..." />
                <h5>Margaret E.</h5>
                <p className="font-weight-light mb-0">{props.reviews.stat}</p>
            </div>
        </div>

    </>
}

export default Testimonials
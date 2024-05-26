import React, { useState } from 'react'
// import img1 from '../assets/img/bg-showcase-1.jpg'

function Imageshow(props) {

    return <>
        <div className="row g-0">
            {
                (props.imageData.index == "0" || props.imageData.index == "2") ? <>
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url('./img/${props.imageData.image}')` }} ></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>{props.imageData.heading}</h2>
                        <p className="lead mb-0">{props.imageData.details}</p>
                    </div>
                </> :
                    <>
                        <div className="col-lg-6 order-lg-1 text-white showcase-img" style={{ backgroundImage: `url('./img/${props.imageData.image}')` }} ></div>
                        <div className="col-lg-6 order-lg-2 my-auto showcase-text">
                            <h2>{props.imageData.heading}</h2>
                            <p className="lead mb-0">{props.imageData.details}</p>
                        </div>
                    </>
            }
        </div>

    </>
}

export default Imageshow

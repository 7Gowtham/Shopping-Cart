import React from 'react'

function Iconsgrid(props) {
    return <>
        <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex"><i className={`${props.iconsData.icon} m-auto text-primary`}></i></div>
                <h3>{props.iconsData.title}</h3>
                <p className="lead mb-0">{props.iconsData.desc}</p>
            </div>
        </div>

    </>
}

export default Iconsgrid
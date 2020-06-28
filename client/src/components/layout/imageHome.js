import React from 'react'
import img from "../../img/home.jpg"
const imageHome = () => {
    return (
        <div className="d-none-mob d-none-md-p">
            <div className="d-flex justify-content-between mb-2">
                <div className="hr-55" ></div>
                <h5 className="text-grey hr-text" > مطبوعات النشطات </h5>
            </div> 
            <div className="card-p mb-5">
                <img src={img} alt="home" className="w-full" />
            </div>
    </div>
    )
}

export default imageHome

import React from 'react'
import MostSee from "../items/mostSee";
import ImageHome from "../layout/imageHome";
import Search from "../registration/SearchReg"
import GetRegistrations from "../registration/GetRegistrations"

const RegistrationPage = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column"> 
            <div className="hr-98 mt-4 mb-4" ></div>  
            <div className="d-flex justify-content-between w-96 mb-4" >
                <div className="w-100-md w-100-mob w-65-p " >
                    <Search />
                    <GetRegistrations />
                </div>
                <div className="w-30-p d-none-mob d-none-md-p" >
                    <MostSee />
                    <ImageHome />
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage

import React ,{useState} from 'react'
import MAP, { Marker } from "react-map-gl"
import { Link } from 'react-router-dom';

const Footer = () => {

    const [viewport, setView] = useState({
        latitude: 36.719423,
        longitude: 2.947630,
        width: "100%",
        height: "40vh",
        zoom: 16
    })


    return (
    <div className="d-flex flex-column bg-darknes footer" >
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-row-reverse justify-content-between w-94 mt-4 text-right mb-4" >
                    
                    <div className="w-40-p d-none-md-p d-none-mob" > 
                        <MAP {...viewport} mapboxApiAccessToken="pk.eyJ1IjoicmVkaGFidmIiLCJhIjoiY2s4Nmk4ZG9iMDU0YzNtcHJzd2ZuNzZ5dCJ9.FqWpWvOfsA12PoRExV_vGw"
                            mapStyle="mapbox://styles/redhabvb/ckbz5g5fd3eb71ir103x3chnw"
                            onViewportChange={viewport => {
                                setView(viewport);
                            }} >

                            <Marker latitude={36.719423} longitude={2.947630} >
                                <i className="marker fas fa-map-marker-alt text-primary" > </i>
                            </Marker>

                        </MAP>                   
                    </div>
                    <div className="w-55-p d-flex flex-column mr-lg" >
                        <div className="d-flex flex-row-reverse justify-content-between col-mob">  
                            <div className="w-28-p" > 
                        <h5 className="mb-3"> العنوان  </h5>
                        <div className="d-flex flex-row-reverse">
                            <div className="w-15-p mark" > <i className="fas fa-map-marker-alt"></i> </div>
                            <p className="w-85-p f-p"> ‎مركز تطوير أنشطة الترفيه العلمي دار الشباب أولاد فايت 2 البلاطو حي 400مسكن تساهمي البلاطو  أولاد فايت </p>
                        </div>
                    </div>
                            <div className="w-28-p" > 
                        <h5 className="mb-3"> الاتصال </h5>
                        <div className="d-flex flex-row-reverse">
                            <div className="w-20-p mark" > <i className="fas fa-phone"></i> </div>
                            <p className="w-85-p"> 023294279 </p>
                        </div>
                        <div className="d-flex flex-row-reverse">
                            <div className="w-20-p mark" > <i className="fas fa-phone"></i> </div>
                            <p className="w-85-p"> 0540865551 </p>
                        </div>
                        <div className="d-flex flex-row-reverse">
                            <div className="w-20-p mark" > <i className="far fa-envelope"></i> </div>
                            <p className="w-85-p"> Ljsa@gmail.com  </p>
                        </div>
                    </div>
                            <div className="w-28-p" > 
                        <h5 className="mb-3"> تابعنا </h5>
                        <div className="d-flex flex-row-reverse">
                            <div className="w-20-p mark" > <i className="fab fa-facebook-f"></i></div>
                            <p className="w-85-p"> <Link to="https://web.facebook.com/DadySidAli77"> LJSA actes scientifiques </Link> </p>
                        </div>
                        <div className="d-flex flex-row-reverse">
                            <div className="w-20-p mark" > <i className="fab fa-facebook-f"></i> </div>
                            <p className="w-85-p"> <Link to="https://web.facebook.com/cdals.ouledfayet2"> centre de développement </Link>  </p>
                        </div>
                    </div>
                        </div>   
                        <div className="text-left text-white">
                            <h6> <span className="text-primary">&copy; Copyright </span> 2020 LJSA.com  </h6>
                        </div>
                    </div>
                </div>
            </div>

    </div>
    )
}

export default Footer

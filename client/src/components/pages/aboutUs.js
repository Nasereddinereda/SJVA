import React , {useState} from 'react'
import MostSee from "../items/mostSee";
import ImageHome from "../layout/imageHome";
import img1 from "../../img/aboutUs/img1.png"
import img2 from "../../img/aboutUs/img2.jpg"
import img3 from "../../img/aboutUs/img3.png"
import img4 from "../../img/aboutUs/img4.png"
import img5 from "../../img/aboutUs/img5.png"
import img6 from "../../img/aboutUs/img6.png"
import img7 from "../../img/aboutUs/img7.png"
import img8 from "../../img/aboutUs/img8.png"
import img9 from "../../img/aboutUs/img9.jpg"
import img10 from "../../img/aboutUs/img10.jpg"
import Events from "../events/events";
import MAP , {Marker} from "react-map-gl"

const AboutUs = () => {

    const [viewport , setView] = useState({
        latitude: 36.719423 ,
        longitude:  2.947630, 
        width:"100%", 
        height:"60vh", 
        zoom: 16
    })

    return (
        <div className="d-flex justify-content-center align-items-center flex-column"> 
            <div className="hr-98 mt-4 mb-4" ></div>  
            <div className="d-flex justify-content-between w-96 mb-4" >
                <div className="w-100-md w-100-mob w-65-p " >
                    {/* para 1  */}
                    <div className="card-p mb-5" >
                        <div className="d-flex justify-content-between mb-4">
                            <div className="hr-60" ></div>
                            <h5 className="text-grey" > عن المؤسسة </h5>
                            <div className="hr-20" ></div>
                        </div> 
                        <div className="d-flex justify-content-center">
                            <div className="w-94" >
                            <h4 className="text-center text-blue mb-3"> دار الشباب اولاد فايت 2 بلاطو </h4>
                                <p className="text-center fa-m">
                                    هو مركز لتطوير أنشطة الترفيه العلمي ، دشن بتاريخ 31 أكتوبر 2018, يهتم بتطوير ممارسة الأنشطة العلمية الموجهة للشباب من أجل ترقية المواطنة و الانخراط الاجتماعي 
                            </p>

                            </div>
                        </div>

                    </div>

                    {/* para 2  */}
                    <div className="card-p mb-5" >
                        <div className="d-flex justify-content-between mb-4">
                            <div className="hr-60" ></div>
                            <h5 className="text-grey" > كلمة المدير  </h5>
                            <div className="hr-20" ></div>
                        </div> 
                        <div className="d-flex justify-content-center">
                            <div className="w-94" >
                                <p className="text-center fa-m">
                                    خر و اعتزاز لكتساب مؤسسة علمية و الاشراف عليهاف  
                                    مركز تطوير أنشطة الترفيه العلمي  دار الشباب أولاد فايت البلاطو الذي يعد لبنة إضافية  في بناء قطاع الشبيبة و الرياضة و نتيجة حتمية لممارسة ثلاين عاما  سنضع فيه أجمل التجارب البيداغوجية في ممارسة الثقافة العلمية .
                                    الدعوة عامة لكل شرائح المجتمع للتقرب منا
                                </p>
                                <h4 className="text-center text-blue mb-3 mt-3"> 
                                    مدير للمركز : روينة عبدالمطلب  </h4>
                            </div>
                        </div>

                    </div>

                    {/* para 3  */}
                    <div className="card-p mb-5" >
                        <div className="d-flex justify-content-between mb-4">
                            <div className="hr-1 hr-60" ></div>
                            <h5 className="text-grey" > اطارات المؤسسة </h5>
                            <div className="hr-20" ></div>
                        </div> 
                        <div className="d-flex justify-content-center ">
                            <div className="d-flex w-94 justify-content-between" >
                                {/* Item 1  */}
                                <div className="w-18-p d-flex flex-column" >
                                    <div className="text-center mb-4">
                                        <img className=" img-us" src={img1} alt="img" />
                                        <p className="mb-non text-grey"> احمد مبارك  </p>
                                        <p className="text-grey">مهندس برمجيات  </p>
                                    </div>
                                    <div className="text-center">
                                        <img className=" img-us" src={img6} alt="img" />
                                        <p className="mb-non text-grey">احمد مبارك  </p>
                                        <p className="text-grey"> مهندس برمجيات  </p>
                                    </div>
                                </div>
                                {/* Item 1  */}
                                <div className="w-18-p d-flex flex-column" >
                                    <div className="text-center mb-4">
                                        <img className=" img-us" src={img2} alt="img" />
                                        <p className="mb-non text-grey"> احمد مبارك  </p>
                                        <p className="text-grey">مهندس برمجيات  </p>
                                    </div>
                                    <div className="text-center">
                                        <img className=" img-us" src={img7} alt="img" />
                                        <p className="mb-non text-grey">احمد مبارك  </p>
                                        <p className="text-grey"> مهندس برمجيات  </p>
                                    </div>
                                </div>
                                {/* Item 1  */}
                                <div className="w-18-p d-flex flex-column" >
                                    <div className="text-center mb-4">
                                        <img className=" img-us" src={img3} alt="img" />
                                        <p className="mb-non text-grey"> احمد مبارك  </p>
                                        <p className="text-grey">مهندس برمجيات  </p>
                                    </div>
                                    <div className="text-center">
                                        <img className=" img-us" src={img8} alt="img" />
                                        <p className="mb-non text-grey">احمد مبارك  </p>
                                        <p className="text-grey"> مهندس برمجيات  </p>
                                    </div>
                                </div>
                                {/* Item 1  */}
                                <div className="w-18-p d-flex flex-column" >
                                    <div className="text-center mb-4">
                                        <img className=" img-us" src={img4} alt="img" />
                                        <p className="mb-non text-grey"> احمد مبارك  </p>
                                        <p className="text-grey">مهندس برمجيات  </p>
                                    </div>
                                    <div className="text-center">
                                        <img className=" img-us" src={img9} alt="img" />
                                        <p className="mb-non text-grey">احمد مبارك  </p>
                                        <p className="text-grey"> مهندس برمجيات  </p>
                                    </div>
                                </div>
                                {/* Item 1  */}
                                <div className="w-18-p d-flex flex-column" >
                                    <div className="text-center mb-4">
                                        <img className=" img-us" src={img5} alt="img" />
                                        <p className="mb-non text-grey"> احمد مبارك  </p>
                                        <p className="text-grey">مهندس برمجيات  </p>
                                    </div>
                                    <div className="text-center">
                                        <img className=" img-us" src={img10} alt="img" />
                                        <p className="mb-non text-grey">احمد مبارك  </p>
                                        <p className="text-grey"> مهندس برمجيات  </p>
                                    </div>
                                </div>
                                {/* end  */}
                            </div>
                        </div>

                    </div>
                    
                    {/* page 4  */}
                    <Events />

                    {/* para 5  */}
                    <div className="card-p mb-5 mt-5" >
                        <div className="d-flex justify-content-between mb-4">
                            <div className="hr-60 hr-1" ></div>
                            <h5 className="text-grey" > الموقع الجغرافي </h5>
                            <div className="hr-20" ></div>
                        </div> 
                        <div className="w-full" >
                            <MAP {...viewport} mapboxApiAccessToken="pk.eyJ1IjoicmVkaGFidmIiLCJhIjoiY2s4Nmk4ZG9iMDU0YzNtcHJzd2ZuNzZ5dCJ9.FqWpWvOfsA12PoRExV_vGw" 
                                mapStyle="mapbox://styles/redhabvb/ckbz6c57a284q1imnmgwvl3al"
                            onViewportChange={viewport => {
                                setView(viewport);
                            }} > 
                            
                                <Marker latitude={36.719423} longitude={ 2.947630} > 
                                    <i className="marker fas fa-map-marker-alt" > </i>
                                 </Marker>

                            </MAP>
                        </div>
                    </div>

                    {/* end  */}
                </div>
                <div className="w-30-p d-none-mob d-none-md-p" >
                    <MostSee />
                    <ImageHome />
                </div>
            </div>
        </div>
    )
}

export default AboutUs

import React , {Fragment } from "react";
import Logo from "../../img/logo.png"


const Navbar = () => {
    return(
    <Fragment>
    {/* Nav 1  */}
    <Fragment>
            <div className="d-flex flex-row-reverse justify-content-between bg-white border-top-3" >
                <div className="d-flex w-15-p flex-row-reverse mr-20">
                    <i className="fas fa-envelope-open-text fa-s my-auto"></i>
               <div className="my-auto mr-20" > البريد الإلكتروني </div>
            </div>
                <div className="d-flex w-15-p flex-row-reverse ">
                    <i className="fas fa-info fa-s my-auto"></i>
                    <div className="my-auto mr-20" > عن الموقع </div>
            </div>
            <div className="d-flex w-15-p flex-row-reverse">
                    <i className="far fa-clipboard fa-s my-auto"></i>
                    <div className="my-auto mr-20" > عن المركز </div>
            </div>
            <div className="d-flex w-15-p flex-row-reverse">
                    <i className="fas fa-solar-panel fa-s my-auto"></i>
                    <div className="my-auto mr-20" > مطوري الموقع </div>
            </div>
                <div className="d-flex flex-row-reverse my-auto" >
                    <i className="fab fa-google-plus-g fa-s mr-10"></i>
                    <i className="fab fa-twitter fa-s mr-10"></i>
                    <i className="fab fa-instagram fa-s mr-10"></i>
                    <i className="fab fa-youtube fa-s mr-10"></i>
                    <i className="fab fa-facebook-f fa-s mr-10"></i>

            </div>
            <div className="input-group w-15-p">
                    <div className="input-group-prepend ">
                        <span className="input-group-text bg-primary primary-border" id="basic-text1"><i className="fas fa-search text-white "
                            aria-hidden="true"></i></span>
                </div>
                <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search"/>
            </div>
        </div>

    </Fragment>
    {/* Nav2 */}
    <Fragment>
        <div className="d-flex flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                        <img src={Logo} className="w-17-p" alt="logo"/>
                        <div className="my-auto text-right text-primary" >
                        <h4>مركز تطوير الأنشطة العلمية</h4>
                        <h4> أولاد فايت 02 </h4>
                    </div>
               </div>
                    
                <div className="my-auto card-btn-nav" >
                        <div className="btn-nav mb-10 bg-primary">
                            <div className="div-text border-left-3pr"> 
                                <h6> اضافة ملتقى </h6>
                            </div>
                            <div className="div-icon">
                                <i className="far fa-calendar-alt primary-text-dark"></i>
                            </div>
                        </div>
                        <div className="btn-nav mb-10 bg-secondary">
                            <div className="div-text border-left-3sr">
                                <h6>  اضافة نص </h6>
                            </div>
                            <div className="div-icon">
                                <i className="far fa-calendar-alt secondary-text-dark "></i>
                            </div>
                        </div>
                       

                </div>
        </div>
    </Fragment>
    {/* Nav3 */}
    <Fragment>
            <div className="d-flex flex-row-reverse justify-content-between bg-dark text-white border-bt-3 nav-3" >
                <div className="w-8-p mr-2p active home" >
                    <i className="fas fa-home"></i> 
                </div>
                    
                <div className="d-flex flex-row-reverse justify-content-between w-18-p p-20" >
                    <i className="fas fa-info-circle"></i>
                    <h6 >عن المؤسسة</h6>
                </div>
                <div className="d-flex flex-row-reverse justify-content-between w-18-p p-20" >
                    <i className="fas fa-calendar-alt"></i>
                    <h6> البرنامج السنوي </h6>
                </div>
                <div className="d-flex flex-row-reverse justify-content-between w-18-p p-20" >
                    <i className="fas fa-user-plus"></i>
                    <h6> التسجيلات </h6>
                </div>
                <div className="d-flex flex-row-reverse justify-content-between w-18-p p-20" >
                    <i className="fas fa-chalkboard-teacher"></i>
                    <h6> فضاء المؤطرين </h6>
                </div>
                    <div className="d-flex flex-row-reverse justify-content-between w-18-p p-20 border-none" >
                    <i className="fas fa-user-friends"></i>
                    <h6> فضاء المنخرط </h6>
                </div>
            </div>
    </Fragment>
    </Fragment>
    );
}

export default Navbar;
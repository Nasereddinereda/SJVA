import React , {Fragment ,useEffect } from "react";
import Logo from "../../img/logoLJSA.png"
import { Link } from 'react-router-dom';
import { loadUser, logout} from "../../actions/authActions"
// import { format } from "util";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Navbar = ({ auth: { isAuthenticated, loading }, loadUser, logout}) => {
    
    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, [isAuthenticated ]);



    const onChange1 = () => {
        document.getElementById("link-1").classList ="d-flex flex-row-reverse justify-content-between w-18-p p-20  border-none active" ;
        document.getElementById("link-2").classList ="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-3").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-4").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-5").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-6").classList ="d-flex flex-row-reverse justify-content-between  p-20  home" ;
    }
    const onChange2 = () => {
        document.getElementById("link-1").classList ="d-flex flex-row-reverse justify-content-between w-18-p p-20  border-none" ;
        document.getElementById("link-2").classList ="d-flex flex-row-reverse justify-content-between w-18-p p-20 active" ;
        document.getElementById("link-3").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-4").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-5").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-6").classList ="d-flex flex-row-reverse justify-content-between  p-20  home" ;
    }
    const onChange3 = () => {
        document.getElementById("link-1").classList ="d-flex flex-row-reverse justify-content-between w-18-p p-20  border-none" ;
        document.getElementById("link-2").classList ="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-3").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20 active" ;
        document.getElementById("link-4").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-5").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-6").classList ="d-flex flex-row-reverse justify-content-between  p-20  home" ;
    }
    const onChange4 = () => {
        document.getElementById("link-1").classList ="d-flex flex-row-reverse justify-content-between w-18-p p-20  border-none " ;
        document.getElementById("link-2").classList ="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-3").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-4").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20 active" ;
        document.getElementById("link-5").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-6").classList ="d-flex flex-row-reverse justify-content-between  p-20  home" ;
    }
    const onChange5 = () => {
        document.getElementById("link-1").classList ="d-flex flex-row-reverse justify-content-between w-18-p p-20  border-none " ;
        document.getElementById("link-2").classList ="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-3").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-4").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-5").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20 active" ;
        document.getElementById("link-6").classList ="d-flex flex-row-reverse justify-content-between  p-20  home" ;
    }
    const onChange6 = () => {
        document.getElementById("link-1").classList ="d-flex flex-row-reverse justify-content-between w-18-p p-20  border-none" ;
        document.getElementById("link-2").classList ="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-3").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-4").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-5").classList="d-flex flex-row-reverse justify-content-between w-18-p p-20" ;
        document.getElementById("link-6").classList ="d-flex flex-row-reverse justify-content-between  p-20  home active" ;
    }

     
        const url = window.location.href;
        var id = url.substring(url.lastIndexOf('/') + 1);
        
    

    

    return(
    <Fragment>
    {/* Nav 1  */}
    {/* {onLoad()} */}
    <Fragment>
                <div className="d-flex flex-row-reverse justify-content-between bg-white border-top-3 nav-1 py-2" >
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
            <div className="d-flex flex-row-reverse my-auto ml-20" >
                    <i className="fab fa-google-plus-g fa-s mr-10"></i>
                    <i className="fab fa-twitter fa-s mr-10"></i>
                    <i className="fab fa-instagram fa-s mr-10"></i>
                    <i className="fab fa-youtube fa-s mr-10"></i>
                    <i className="fab fa-facebook-f fa-s mr-10"></i>

            </div>
            {/* <div className="input-group w-15-p">
                    <div className="input-group-prepend ">
                        <span className="input-group-text bg-primary primary-border" id="basic-text1"><i className="fas fa-search text-white "
                            aria-hidden="true"></i></span>
                </div>
                <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search"/>
            </div> */}
        </div>

    </Fragment>
    {/* Nav2 */}
    <Fragment>
                <div className="d-flex  justify-content-center nav-2">


                    <div className="d-flex  justify-content-between w-85-p"> 


                    
                        <div className="my-auto card-btn-nav" >
                            {!isAuthenticated && !loading ? (
                            <Link to="/Registration">
                                <div className="btn-nav mb-10 bg-primary">
                                    <div className="div-text border-left-3pr">
                                        <h6> التسجيلات </h6>
                                    </div>
                                    <div className="div-icon">
                                        <i className="far fa-calendar-alt primary-text-dark"></i>
                                    </div>
                                </div>
                            </Link>):(
                                    // <Link to="/Admins/Registration">
                                    <Link to="/additem">
                                        <div className="btn-nav mb-10 bg-primary">
                                            <div className="div-text border-left-3pr">
                                                <h6> اضافة مقالة  </h6>
                                            </div>
                                            <div className="div-icon">
                                                <i className="far fa-calendar-alt primary-text-dark"></i>
                                            </div>
                                        </div>
                                    </Link>
                            )

                        }
                            
                            {!isAuthenticated && !loading ?
                            (<Link to="/aboutUs">
                                <div className="btn-nav mb-10 bg-secondary">
                                    <div className="div-text border-left-3sr">
                                        <h6> القاء نظرة </h6>
                                    </div>
                                    <div className="div-icon">
                                        <i className="far fa-calendar-alt secondary-text-dark "></i>
                                    </div>
                                </div>
                            </Link>) : (
                                    <Link to="#" onClick={logout}>
                                        <div className="btn-nav mb-10 bg-secondary">
                                            <div className="div-text border-left-3sr">
                                                <h6> تسجيل الخروج </h6>
                                            </div>
                                            <div className="div-icon">
                                                <i className="far fa-calendar-alt secondary-text-dark "></i>
                                            </div>
                                        </div>
                                    </Link>
                            ) }
                        </div>
        
                        <div className="w-40-p">
                            <img src={Logo} className="w-full" alt="logo" />
                        </div>
            </div>


        </div>
    </Fragment>
    {/* Nav3 */}
    <Fragment> 
                <nav className="navbar navbar-expand-md navbar-dark bg-dark text-white position-sticky sticky-top border-bt-3"> 
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav d-flex  justify-content-between w-full">

                            <li className="d-flex flex-row-reverse justify-content-between w-18-p p-20  border-none"  id="link-1">
                                <Link to="#" onClick={onChange1} > <i className="fas fa-user-friends"></i>  </Link> 
                                <Link to="#" onClick={onChange1} > فضاء المنخرط  </Link> 
                            </li>
                            <li className="d-flex flex-row-reverse justify-content-between w-18-p p-20" id="link-2">
                                <Link to="#" onClick={onChange2} > <i className="fas fa-chalkboard-teacher"></i>  </Link> 
                                <Link to="#" onClick={onChange2} > فضاء المؤطرين  </Link> 
                            </li>



                            {id ==="Registration" ? 

                                (!isAuthenticated ? 
                                <li className="d-flex flex-row-reverse justify-content-between w-18-p p-20 active" id="link-3">
                                    <Link to="/Registration" onClick={onChange3} > <i className="fas fa-user-plus"></i>  </Link>
                                    <Link to="/Registration" onClick={onChange3} > التسجيلات  </Link>
                                </li> 
                                 : 
                                <li className="d-flex flex-row-reverse justify-content-between w-18-p p-20 active" id="link-3">
                                    <Link to="/Admins/Registration" onClick={onChange3} > <i className="fas fa-user-plus"></i>  </Link>
                                    <Link to="/Admins/Registration" onClick={onChange3} > التسجيلات  </Link>
                                </li> 
                                
                                )




                                
                                : 
                                <li className="d-flex flex-row-reverse justify-content-between w-18-p p-20" id="link-3">
                                    {!isAuthenticated && !loading ? (
                                    <Fragment>
                                        <Link to="/Registration" onClick={onChange3} > <i className="fas fa-user-plus"></i>  </Link>
                                        <Link to="/Registration" onClick={onChange3} > التسجيلات  </Link>
                                    </Fragment>): (
                                    <Fragment>
                                            <Link to="/Admins/Registration" onClick={onChange3} > <i className="fas fa-user-plus"></i>  </Link>
                                            <Link to="/Admins/Registration" onClick={onChange3} > التسجيلات  </Link>
                                    </Fragment>)}

                                </li>

                            }





                            <li className="d-flex flex-row-reverse justify-content-between w-18-p p-20" id="link-4">
                                <Link to="#" onClick={onChange4} > <i className="fas fa-calendar-alt"></i>  </Link> 
                                <Link to="#" onClick={onChange4} > البرنامج السنوي  </Link> 
                            </li>
                            {
                                id ==="aboutUs" ? 
                                    <li className="d-flex flex-row-reverse justify-content-between w-18-p p-20 active" id="link-5">
                                        <Link to="/aboutUs" onClick={onChange5} > <i className="fas fa-info-circle"></i>  </Link>
                                        <Link to="/aboutUs" onClick={onChange5} > عن المؤسسة  </Link>
                                    </li> : 
                                    <li className="d-flex flex-row-reverse justify-content-between w-18-p p-20" id="link-5">
                                        <Link to="/aboutUs" onClick={onChange5} > <i className="fas fa-info-circle"></i>  </Link>
                                        <Link to="/aboutUs" onClick={onChange5} > عن المؤسسة  </Link>
                                    </li>
                            }

                            { id==="" ? 
                                <li className="d-flex flex-row-reverse justify-content-between  p-20  home active" id="link-6" >
                                    <Link to="/" onClick={onChange6} > <i className="fas fa-home"></i>  </Link>
                                    <Link to="/" className="d-none-md" onClick={onChange6} > الصفحة الرئيسية </Link>
                                </li> : 
                                <li className="d-flex flex-row-reverse justify-content-between  p-20  home" id="link-6" >
                                    <Link to="/" onClick={onChange6} > <i className="fas fa-home"></i>  </Link>
                                    <Link to="/" className="d-none-md" onClick={onChange6} > الصفحة الرئيسية </Link>
                                </li>

                            }
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="#">  
                                    <div className="d-flex flex-row-reverse justify-content-between w-18-p p-20" >
                                        <i className="fas fa-info-circle"></i>
                                        <h6 >عن المؤسسة</h6> 
                                    
                                    </div>                   
                                </Link>
                            </li> */}
                        </ul>
                    </div>
        </nav>
    </Fragment>
    </Fragment>
    );
}

Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    loadUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { loadUser, logout })(Navbar);

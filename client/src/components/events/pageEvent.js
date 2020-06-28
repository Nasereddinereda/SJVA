import React, { useEffect, Fragment } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Registration from "./registration";
import RegEvnts from "../registration/GetRegEvents";
import Spiner from "../layout/Spiner"
// import Comment from "../comment/Comment"
import { loadUser } from "../../actions/authActions"
import { getItem } from "../../actions/itemsActions";

const PageEvent = ({ auth: { isAuthenticated, loading } ,items: { current, error }, getItem , loadUser}) => {
    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, [isAuthenticated]);

    console.log(isAuthenticated);
    useEffect(() => {
        const url = window.location.href;
        var id = url.substring(url.lastIndexOf('/') + 1);
        getItem(id);
        // eslint-disable-next-line
    }, []);

    let images ; 
    let img ;
    let size = false ; 
    if (window.innerWidth  < 768){
    size = true; 
    }

    if(current){

        images = require.context('../../../../images', true);
        img = images('./' + current.images[0]); 

        let myimg = <img src={img} alt="img" className="img-event" />    ;
        console.log(myimg.bind);
    }

    
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex justify-content-between w-96 mb-4" >
                <div className="d-flex flex-column w-full">
                    <div className="hr-98 mt-4 mb-4" ></div> 
                    <div className="card-p mb-5" > 
                        <div className="d-flex justify-content-between ">
                            <div className="hr-60" ></div>
                            <h4 className="text-grey" > الملتقيات </h4>
                            <div className="hr-20" ></div>
                        </div>
                            {current === null  ?
                                (error === null ? 
                                (<Spiner />):(<p> No event to show  </p>)
                                    )
                                
                                :
                                ( 
                                    <div className="d-flex flex-column w-full">
                                    <div className="text-right" >   <h2 className="text-primary mt-4 mb-5 mr-5 text-mob-22 tt-event" > <span className="text-dark udr"> الملتقى :</span> &nbsp; {current.title} </h2> </div>
                                        <div className="d-flex justify-content-center mb-5 mt-5" >
                                        <img src={img} alt="img" className="img-event" />     
                                        </div>      
                                    <h4 className="text-primary text-right mr-4 udr mb-4" >  الموضوع </h4>
                                    <p className="text-right mr-4 fa-m"> {current.discription} </p>    

                                    <h4 className="text-primary text-right mr-4 udr mb-4 mt-5" > التفاصيل </h4>
                                    
                                    <div className="d-flex flex-row-reverse mr-4"> 
                                    <h5> : صدرت في  </h5>
                                    <p className="mr-2 fa-m ft-400"> {current.createdAt.slice(0, 10)}  </p>
                                    </div>
                                    <div className="d-flex flex-row-reverse mr-4"> 
                                    <h5> : مكان الانطلاق </h5>
                                    <p className="mr-2 fa-m ft-400"> {current.departure}  </p>
                                    </div>
                                    <div className="d-flex flex-row-reverse mr-4">
                                        <h5> : تاريخ الانطلاق </h5>
                                        <p className="mr-2 fa-m ft-400"> {current.date}  </p>
                                    </div>
                                    <div className="d-flex flex-row-reverse mr-4"> 
                                    <h5> : على الساعة  </h5>
                                    <p className="mr-2 fa-m ft-400"> {current.hour}  </p>
                                    </div>
                                    <div className="d-flex flex-row-reverse mr-4"> 
                                    <h5> : الاتجاه </h5>
                                    <p className="mr-2 fa-m ft-400"> {current.arrival}  </p>
                                    </div>

                                    {current.registration ? (
                                    // <Registration />
                                        !isAuthenticated && !loading ? (<Registration />):(
                                        <Fragment>
                                            {size === true ? (""):(<Fragment> 
                                                    <h4 className="text-primary text-right mr-4 udr mb-5" >  طلب الحضور </h4>
                                                    <RegEvnts />
                                            </Fragment>)}
                                            
                                        </Fragment>
                                        
                                        )
                                    ) : ("")}
                                                    
                                    </div>
                                )}

                            

                    </div>
                </div>
            </div>
        </div>
    )
}

PageEvent.propTypes = {
    items: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    items: state.items , 
    auth: state.auth
});

export default connect(mapStateToProps, { getItem ,loadUser })(PageEvent);

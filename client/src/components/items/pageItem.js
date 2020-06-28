import React ,{useEffect} from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Galery from "../layout/Galery"
import Comment from "../comment/Comment"
import { getItem } from "../../actions/itemsActions";
import Spiner from "../layout/Spiner"

const PageItem = ({ items: { current, error }, getItem }) => {
   
    useEffect(() => {
        const url = window.location.href;
        var id = url.substring(url.lastIndexOf('/') + 1);
        getItem(id);
        // eslint-disable-next-line
    }, []);



    return (
        <div>
            <div className="d-flex justify-content-center align-items-center flex-column"> 
                <div className="d-flex justify-content-between w-96 mb-4" >
            {  current === null ? 
                <div className="d-flex flex-column w-full"> 
                    <div className="hr-98 mt-4 mb-4" ></div> 
                    <div className="card-p mb-5" > 
                                <div className="d-flex justify-content-between ">
                                    <div className="hr-60" ></div>
                                    <h4 className="text-grey" > المستجدات </h4>
                                    <div className="hr-20" ></div>
                                </div> 
                                <div>
                              {  (error === null ?
                                (<Spiner />):(<p> No event to show  </p>)
                                    )}
                                </div>

                    </div>
                </div> :
                (   
                    <div className="d-flex flex-column w-full">

                        <div className="hr-98 mt-4 mb-4" ></div> 
                                <div className="card-p mb-5" > 
                                    <div className="d-flex justify-content-between ">
                                        <div className="hr-60" ></div>
                                        <h4 className="text-grey" > المستجدات </h4>
                                        <div className="hr-20" ></div>
                                    </div> 
                                    {/* <div className="text-right" >   <h2 className="text-primary mt-4 mb-5" > {current.title} </h2> </div> */}
                                    <div className="text-right mb-5" >   <h2 className="text-primary mt-4 mb-5 mr-5 text-mob-22 tt-event " > <span className="text-dark udr">  المحتوى :  </span> &nbsp; {current.title} </h2> </div>
                                    {/* <p className="text-right mb-5" >   {current.createdAt.slice(0, 10)} <i className="far fa-hourglass"></i> </p> */}
                                    <Galery current={current} key={current._id} />
                                    <h4 className="text-primary text-right mr-4 udr mb-5" >  الموضوع </h4>
                                    <p className="text-right mr-4 fa-m"> {current.discription} </p>
                                    <Comment />
                                </div>
 


                    </div>
                ) 


            }
                
                </div>
            </div>
        </div>
    )
}

PageItem.propTypes = {
    items: PropTypes.object.isRequired,
    getItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    items: state.items
});

export default connect(mapStateToProps, { getItem })(PageItem);

import React from 'react' ; 
// import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCurrent } from "../../actions/itemsActions";
import { Link } from 'react-router-dom';

// import source from `../../img/logo.png`;


const Item = ({ item , setCurrent }) => {
    const images = require.context('../../../../images', true);
    let img = images('./' + item.images[0]); 

    let a = 180 ; 

    if (window.innerWidth < 768 ){
        a = 65 ; 
    }

    return (
        <div className="d-flex justify-content-between mt-5" >
            <div className="w-65-p">
                <div className="d-flex flex-column" >
                    <div> <h5 className=" text-secondary text-right"> {item.title} </h5> </div> 
                    <p className="text-primary text-right fa-14" >   {item.createdAt.slice(0,10)} <i className="far fa-hourglass"></i> </p>
                    <div className="text-right text-justify" > {item.discription.slice(0, a).concat('...الخ') } </div> 
                    <h6 className="text-right mt-2" > <Link className="a-1" to={`/page/${item._id}`}> ...إقرأ المزيد  </Link> </h6>
                </div>
            </div>
            <div className="w-30-p card-item-image" >
                <img src={img} alt="img" />
            </div>
        </div>
    );
};

Item.propTypes = {};

Item.propTypes = {
    item: PropTypes.object.isRequired,
    setCurrent: PropTypes.func.isRequired
};

export default connect(null, {  setCurrent })(Item);



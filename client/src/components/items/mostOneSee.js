import React from 'react';
// import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

// import source from `../../img/logo.png`;
let a = 50 ; 

if (window.innerWidth < 991) {
    a = 30;
}

const MostOneSee = ({ item }) => {
    const images = require.context('../../../../images', true);
    let img = images('./' + item.images[0]); 
    return (
        <div className="d-flex justify-content-between mt-5" >
            <div className="w-65-p">
                <div className="d-flex flex-column" >
                    <div> <h6 className="text-primary text-right"> {item.title} </h6> </div>
                    <div className="text-right text-justify fa-14" > {item.discription.slice(0, a).concat('...الخ')} </div>
                    <h6 className="text-right mt-2" > <Link className="a-1 fa-16" to={`/page/${item._id}`}> ...إقرأ المزيد  </Link> </h6>
                </div>
            </div>
            <div className="w-30-p card-item-image" >
                <img src={img} alt="img" />
            </div>
        </div>
    )
}

MostOneSee.propTypes = {};

MostOneSee.propTypes = {
    item: PropTypes.object.isRequired
};

export default connect(null)(MostOneSee);


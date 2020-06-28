import React from 'react';
// import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCurrent } from "../../actions/itemsActions";
import { Link } from 'react-router-dom';

const Item = ({ event, setCurrent }) => {

    // console.log(event);
   
    let images , img ;
    if (event.images && event.images[0]){
    images = require.context('../../../../images', true);
    img = images('./' + event.images[0]); 

    }
  
    return(
        <div className="mr-10-nl text-right" >
            <img src={img} alt="img" className="w-full" height={150} width={40} />
             
                <h6 className="card-title text-primary mt-1"> 
                {
                    event.title.length < 20 ? event.title : (".."+ event.title.substr(0, 18) )
                        // event.title.length < 18 ? event.title : event.title.length
                } 
                </h6>
                {/* <div className="card-text" > {event.discription.substr(0,50) } </div> */}
                <div className="card-text mb-2" > {
                    event.discription.length < 77 ? event.discription : (event.discription.substr(0, 76) )
                } </div>
            <h6> <Link className="a-1" to={`/event/${event._id}`}> ...إقرأ المزيد  </Link> </h6>
        
        </div>
    )

}

Item.propTypes = {};

Item.propTypes = {
    event: PropTypes.object.isRequired,
    setCurrent: PropTypes.func.isRequired
};

export default connect(null, { setCurrent })(Item);
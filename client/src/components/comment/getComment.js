import React from 'react'
import img from '../../img/avatar.png'
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { getComs } from "../../actions/commentAction";

const getComment = ({comment}) => {
    const d1 = comment.createdAt.slice(0 ,10) ;
    const d2 = comment.createdAt.slice(11 ,16) ;


    return (
        <div className="d-flex flex-row-reverse mb-5">
            <div className="ml-4">
               <img src={img} alt="img" />
            </div>
            <div>
                <p className="title-com"> {comment.username} </p>
                <div className="d-flex time-com justify-content-end" > 
                <p> {d2} </p>
                <p className="ml-1"> على </p>
                <p className="ml-1"> {d1} </p>
                </div>
                <p className="text-com"> {comment.comment} </p>
            </div>
            
        </div>
    )
}

getComment.propTypes = {
    comment: PropTypes.object.isRequired
};

export default connect(null)(getComment);

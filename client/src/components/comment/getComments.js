import React, { useEffect ,useState } from 'react'
import { connect } from "react-redux";
import { getComs } from "../../actions/commentAction";
import GETCOM from "./getComment";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Spiner from "../layout/Spiner"

const GetComments = ({ comment: { comments, loading }, getComs }) => {
    const [index,setID] = useState(4);
    const [currentPage] = useState("1");
    const [postPage, setPP] = useState(index);
    let currentPost; 
    useEffect(() => {
        const url = window.location.href;
        var id = url.substring(url.lastIndexOf('/') + 1);
        getComs(id);
        // eslint-disable-next-line
    }, [comments,currentPost]);
 

    
    let idexOfLastPage = currentPage * postPage;
    let idexOfFirstPost = idexOfLastPage - postPage;
    if (comments) {
        currentPost = comments.slice(idexOfFirstPost, idexOfLastPage);
        // currentPost = items.splice(0 , idexOfFirstPost );
    }

    const addCom = () => {
        setID(index+4);
        setPP(index) ;
        currentPost = comments.slice(idexOfFirstPost, idexOfLastPage);
        console.log(index , comments.length)
    }

    return (
        <div className="d-flex justify-content-end">
            <div className="mb-10vh mt-5 w-65-p float-right text-right d-flex flex-column">
                {currentPost !== undefined && currentPost.length > 0 ? (
                    <div> 


                        {currentPost.map(comment => <GETCOM comment={comment} key={comment._id} />) }
                       
                        {
                            index >= comments.length + 4 || currentPost.length < 4 ? 
                            "" :
                            <Link className="a-1 link-1" to="#!" onClick={addCom} > ...إقرأ المزيد  </Link>
                        }
                        
                    
                    </div>

                ) : (
                    
                        currentPost !== undefined && currentPost.length === 0 ? (<h5 className="text-right text-danger mr-4"> لا توجد تعليقات </h5>) : (<Spiner />)
                        

                    )}
            </div>
    </div>
    )
}

GetComments.propTypes = {
    comment: PropTypes.object.isRequired,
    getComs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    comment: state.comment
});

export default connect(mapStateToProps, { getComs })(GetComments);

import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import Item from "./item";
import PropTypes from "prop-types";
import { getItems } from "../../actions/itemsActions";
import Pagination from "../routing/pagination";
import Spiner from "../layout/Spiner"

const Items = ({ items: { items, loading } , getItems}) => {
    const [currentPage, setCP] = useState("1");
    const [postPage] = useState(5);

    useEffect(() => {
        getItems();
        // eslint-disable-next-line
    }, []);


    let bool = false ; 
    let idexOfLastPage = currentPage * postPage ; 
    let idexOfFirstPost = idexOfLastPage  - postPage ; 
    let currentPost ; 

    if(items){
        currentPost = items.slice(idexOfFirstPost ,idexOfLastPage );
        bool = true ; 
    // currentPost = items.splice(0 , idexOfFirstPost );
    }

    const paginate = pageNumber => setCP(pageNumber);

    return(
        <div className="card-p mb-5" >
            <div className="d-flex justify-content-between ">
            <div className="hr-60" ></div>    
            <h5 className="text-grey" > المستجدات </h5> 
            <div className="hr-20" ></div>    
            </div> 
            <div>

            
                
                {!bool || currentPost === null || currentPost === undefined ? (
                    !bool ? (<Spiner />): (<p className = "center"> No items to show </p>)
                
            ) : (
                    currentPost.map(item => <Item item={item} key={item._id} />) 
                    
                )}

                {!loading && (currentPost === null || currentPost === undefined) ? (
                <p className="center">  </p>
            ) : (
                        <Pagination
                            postsPerPage={postPage}
                            totalPosts={items.length}
                            paginate={paginate}
                        />
                    
                )}
            

            </div>
           {/* {
                {!loading && (currentPost === null || currentPost === undefined) ?{
                <Pagination
                    postsPerPage={postPage}
                    totalPosts={items.length}
                    paginate={paginate}
                />
               }
           
            } */}
            {/* <div className="text-right mb-4 mt-3">
                <a type="button" className="btn btn-primary text-white px-4"> إقرأ المزيد  </a>
            </div> */}
            
        </div>
    )
}

Items.propTypes = {
    items: PropTypes.object.isRequired,
    getItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    items: state.items
});

export default connect(mapStateToProps, { getItems })(Items);
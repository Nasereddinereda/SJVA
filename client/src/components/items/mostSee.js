import React, { useEffect} from "react";
import { connect } from "react-redux";
import MostOne from "./mostOneSee";
import PropTypes from "prop-types";
import { getItems } from "../../actions/itemsActions";
import Spiner from "../layout/Spiner"

const MostSee = ({ items: { items, loading }, getItems }) => {
    useEffect(() => {
        getItems();
        // eslint-disable-next-line
    }, []);

    let newItems =[];
    let NewItems =[];
    let bool = false ;
 
    if(items){
        newItems = items ;
        for(let i=0;i<newItems.length;i++){
        for(let j=i+1;j<newItems.length;j++){
        if(newItems[j].see>newItems[i].see){
        let z = newItems[j] ; 
        newItems[j] = newItems[i] ; 
        newItems[i] = z; 
        }
        }}
  
        bool = true ; 
    }

    if(newItems.length>4){
        for (let i = 0; i < 4; i++) {
            NewItems.push(newItems[i])
        }
    } else {
    NewItems = newItems ;
    }
 
    return (
        <div className="d-none-mob d-none-md-p">
            <div className="d-flex justify-content-between mb-2">
                <div className="hr-60" ></div>
                <h5 className="text-grey hr-text" >الاكثر مشاهدة</h5>
            </div> 
            <div className="card-p mb-5" >
                { !bool || NewItems === [] ? (

                    !bool ? (<Spiner />): (<p className = "center"> No items to show </p>)
                    
                    
                ) : (
                        NewItems.map(item => <MostOne item={item} key={item._id} />)

                    )}
            </div>
    </div>
    )
}

MostSee.propTypes = {
    items: PropTypes.object.isRequired,
    getItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    items: state.items
});

export default connect(mapStateToProps, { getItems })(MostSee);

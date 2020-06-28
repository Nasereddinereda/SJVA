import React, { useEffect } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEvRegs } from "../../actions/regActions";
import OneEV from "./GetRegEvent"
import Spiner from "../layout/Spiner"

const GetRegEvents = ({reg:{current , loading} , getEvRegs}) => {
    useEffect(() => {
        const url = window.location.href;
        var id = url.substring(url.lastIndexOf('/') + 1);
        getEvRegs(id);
        // eslint-disable-next-line
    }, []);

    console.log("cuur" ,current);

    return (
        <div>
            {current === null ? (<Spiner/>) : (

                current.length > 0 ? 
                    (current.map(reg => <OneEV Rege={reg} key={reg._id} />))
                    :
                    (<h5 className="text-right text-danger mr-4"> لا توجد تسجيلات لتظهر لك  </h5>)
                
            )}
        </div>
    )
}

GetRegEvents.propTypes = {
    reg: PropTypes.object.isRequired,
    getEvRegs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    reg: state.reg
});

export default connect(mapStateToProps, { getEvRegs })(GetRegEvents);


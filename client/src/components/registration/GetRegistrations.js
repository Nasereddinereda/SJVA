import React ,{useEffect} from 'react'
import Registration from './GetRegistration'
import { getRegs } from '../../actions/regActions'
import PropTypes from "prop-types";
import { connect } from "react-redux";

const GetRegistrations = ({ reg: { registerations, loading } , getRegs}) => {

    return (
        <div>
            {registerations === null ? "":(
                registerations.map(reg => <Registration Rege={reg} key={reg._id} />) 
            ) }
        </div>
    )
}

GetRegistrations.propTypes = {
    reg: PropTypes.object.isRequired,
    getRegs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    reg: state.reg
});

export default connect(mapStateToProps, { getRegs })(GetRegistrations);

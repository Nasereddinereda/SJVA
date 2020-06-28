import React from 'react'
import { deleteReg ,confirmReg } from '../../actions/regActions'
import PropTypes from "prop-types";
import { connect } from "react-redux";

const GetRegistration = ({reg: { registerations, loading } , Rege ,deleteReg, confirmReg }) => {


    const onDelete = () => {
        deleteReg(Rege._id)
    };
    const onConfirm = () => {
        // deleteReg(Rege._id)
        confirmReg(Rege._id);
    };


    return (
        <div className="card-p mb-4">
            <div className="d-flex col-mob"> 
                <div className="d-flex w-50-p w-100-mob justify-content-end">
                    <p> {Rege.last_name} </p>
                    <h6 className="ml-2"> : اللقب </h6>
                </div>
                <div className="d-flex w-50-p w-100-mob justify-content-end">
                    <p> {Rege.first_name} </p>
                    <h6 className="ml-2"> : الاسم </h6>
                </div>
            </div>

            <div className="d-flex col-mob"> 
                <div className="d-flex justify-content-end w-50-p w-100-mob ">
                    <p> {Rege.address} </p>
                    <h6 className="ml-2" > : العنوان </h6>
            </div>
                <div className="d-flex justify-content-end w-50-p w-100-mob "> 
                <div className="d-flex flex-row-reverse" > <p> {Rege.birthday}  </p>  <h6 className="ml-2 mr-2 "> ب </h6> <p>   {Rege.birth_place} </p>  </div>
                <h6 className="ml-2" > : تاريخ و مكان الازدياد  </h6>
            </div>
            </div>

            <div className="d-flex col-mob">
                <div className="d-flex w-50-p justify-content-end w-100-mob">
                    <p> {Rege.phone} </p>
                    <h6 className="ml-2">: الهاتف </h6>
                </div>
                <div className="d-flex w-50-p justify-content-end w-100-mob">
                    <p> {Rege.email} </p>
                    <h6 className="ml-2"> : البريد الالكتروني </h6>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <div className="d-flex justify-content-end">
                    <p> {Rege.school_year} </p>
                    <h6 className="ml-2"> : المستوى الدراسي </h6>
                </div>
            </div>
            {Rege.confirm === "true" ?("") : (
                <div className="d-flex ">
                    <button type="button" className="btn btn-primary w-25-mob  col-2 mr-2" onClick={onConfirm} >Confirm </button>
                    <button type="button" className="btn btn-danger w-25-mob col-2" onClick={onDelete} >Delete </button>
                </div>
            )}


        </div>
    )
}

GetRegistration.propTypes = {
    reg: PropTypes.object.isRequired,
    deleteReg: PropTypes.func.isRequired,
    confirmReg: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    reg: state.reg
});

export default connect(mapStateToProps, { deleteReg , confirmReg })(GetRegistration);
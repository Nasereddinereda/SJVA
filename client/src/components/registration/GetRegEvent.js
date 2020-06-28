import React from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";

const GetRegEvent = ({Rege}) => {
    return (
        <div className="d-flex justify-content-end">
            <div className="card-p mb-4 w-65-p w-100-md w-100-md-2">
                <div className="d-flex ">
                    <div className="d-flex w-50-p justify-content-end">
                        <p> {Rege.last_name} </p>
                        <h6 className="ml-2"> : اللقب </h6>
                    </div>
                    <div className="d-flex w-50-p justify-content-end">
                        <p> {Rege.first_name} </p>
                        <h6 className="ml-2"> : الاسم </h6>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="d-flex justify-content-end w-50-p ">
                        <p> {Rege.address} </p>
                        <h6 className="ml-2" > : العنوان </h6>
                    </div>
                    <div className="d-flex justify-content-end w-50-p ">
                        <div className="d-flex flex-row-reverse" > <p> {Rege.birthday}  </p>  <h6 className="ml-2 mr-2 "> ب </h6> <p>   {Rege.birth_place} </p>  </div>
                        <h6 className="ml-2" > : تاريخ و مكان الازدياد  </h6>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="d-flex w-50-p justify-content-end">
                        <p> {Rege.phone} </p>
                        <h6 className="ml-2">: الهاتف </h6>
                    </div>
                    <div className="d-flex w-50-p justify-content-end">
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
                <div className="d-flex justify-content-end">
                    <div className="d-flex justify-content-end">
                        <p> {Rege.relation} </p>
                        <h6 className="ml-2"> : الصلة بهاذا الموقع </h6>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <div className="d-flex justify-content-end">
                        <p> {Rege.why} </p>
                        <h6 className="ml-2"> : انا اسجل لكي  </h6>
                    </div>
                </div>


            </div>
       </div>
    )
}

GetRegEvent.propTypes = {
    Rege: PropTypes.object.isRequired
};


export default connect(null)(GetRegEvent);

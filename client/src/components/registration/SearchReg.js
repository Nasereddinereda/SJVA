import React, { useRef , useState ,useEffect } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchReg } from "../../actions/regActions";

const SearchReg = ({ searchReg}) => {
    const text = useRef("");
    const [confirmed, setCM] = useState(false);
    
    useEffect(() => {
            searchReg(text.current.value, confirmed );
    }, [confirmed]);

    const onChange = () => {
        searchReg(text.current.value , confirmed );
    };


    return (
        <div className="card-p mb-4" >
            <input
                id="text"
                type="search"
                name="text"
                placeholder="...البحث باللقب او الاسم او البريد الالكتروني او الهاتف"
                className="w-full bg-grey hi-40 text-right"
                ref={text}
                onChange={onChange}
            />
            <div className="d-flex justify-content-end">
                <label htmlFor="box" className="lh-9 ptr text-mob-14" > <span className="text-secondary udr mr-2" > اضغط هنا  </span> للحصول على التسجيلات المؤكدة   </label>
                <input type="checkbox" id="box" name="box" value="event"
                    onChange={() => confirmed === false ? setCM(true) : setCM(false)}
                ></input>
            </div>
        </div>
    )
}

SearchReg.propTypes = {
    searchReg: PropTypes.func.isRequired
};

export default connect(null, { searchReg })(SearchReg);

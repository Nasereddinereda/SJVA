import React, { useState } from 'react';
import { addReg } from "../../actions/regActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const Registration = ({addReg}) => {
    const [last_name, setLN] = useState("");
    const [first_name, setFN] = useState("");
    const [birth_place, setBP] = useState("");
    const [birthday, setB] = useState("");
    const [address, setA] = useState("");
    const [email, setE] = useState("");
    const [phone, setP] = useState("");
    const [school_year, setS] = useState("");
    const [mode, setM] = useState("event");
    const [relation, setR] = useState("");
    const [why, setW] = useState("");

    const onSubmit = async e => {
        e.preventDefault();
        const url = window.location.href;
        var event = url.substring(url.lastIndexOf('/') + 1);
        const newLog = {
            last_name,
            first_name,
            birth_place,
            birthday,
            address,
            email,
            phone,
            school_year,
            mode,
            event,
            relation , 
            why
        }


        addReg(newLog);

        setLN("");
        setFN("");
        setBP("");
        setB("");
        setA("");
        setE("");
        setP("");
        setS("");
        setM("event");
        setR("");
        setW("");


    }



    return (
        <div>
            <form className="card br-b mt-5 w-65-p float-right text-right w-100-mob" >
                <header className="d-flex justify-content-center" >
                    <div className="d-flex w-80-p">
                        <i className="far fa-clipboard"></i>
                        <h5 className="text-mob-14" > Please don't register twice, thanks . </h5>
                    </div>
                </header>
                <div className="d-flex justify-content-center" >
                    <div className="w-80-p card-form" >
                        <label htmlFor="last"  >اللقب </label>
                        <input
                            id="last"
                            type="text"
                            name="text"
                            placeholder="اللقب"
                            value={last_name}
                            onChange={e => setLN(e.target.value)}
                            className="text-right"
                        />
                        <label htmlFor="first"  > الاسم </label>
                        <input
                            id="first"
                            type="text"
                            name="text"
                            placeholder="الاسم"
                            value={first_name}
                            onChange={e => setFN(e.target.value)}
                            className="text-right"
                        />
                        <label htmlFor="brt"  >تاريخ الميلاد </label>
                        <input
                            id="brt"
                            type="date"
                            name="text"
                            max="2015-00-01"
                            value={birthday}
                            onChange={e => setB(e.target.value)}
                        />
                        <label htmlFor="pbrt"  > مكان الميلاد  </label>
                        <input
                            id="pbrt"
                            type="text"
                            name="text"
                            placeholder="مكان الميلاد"
                            value={birth_place}
                            onChange={e => setBP(e.target.value)}
                            className="text-right"
                        />
                        <label htmlFor="adr"  > العنوان  </label>
                        <input
                            id="adr"
                            type="text"
                            name="text"
                            placeholder="العنوان"
                            value={address}
                            onChange={e => setA(e.target.value)}
                            className="text-right"
                        />
                        <label htmlFor="eml"  >البريد الالكتروني  </label>
                        <input
                            id="eml"
                            type="email"
                            name="text"
                            placeholder="البريد الالكتروني"
                            value={email}
                            onChange={e => setE(e.target.value)}
                            className="text-right"
                        />
                        <label htmlFor="phone"  > الهاتف  </label>
                        <input
                            id="phone"
                            type="text"
                            name="text"
                            placeholder="الهاتف"
                            value={phone}
                            onChange={e => setP(e.target.value)}
                            className="text-right"
                        />
                        <label htmlFor="school"  > المستوى   </label>
                        <select id="school" value={school_year} onChange={e => setS(e.target.value)} >
                            <option value="">--Please choose an option--</option>
                            <option value="P1"> السنة الأولى ابتدائي </option>
                            <option value="P2"> السنة الثانية ابتدائي </option>
                            <option value="P3"> السنة الثالثة ابتدائي </option>
                            <option value="P4"> السنة الرابعة ابتدائي </option>
                            <option value="P5"> السنة الخامسة ابتدائي </option>
                            <option value="M1"> السنة الأولى متوسط </option>
                            <option value="M2"> السنة الثانية متوسط </option>
                            <option value="M3"> السنة الثالثة متوسط </option>
                            <option value="M4"> السنة الرابعة متوسط </option>
                            <option value="S1"> السنة الاولى ثانوي  </option>
                            <option value="S2"> السنة الثانية ثانوي  </option>
                            <option value="S3"> السنة الثالثة ثانوي </option>
                            <option value="HIGHT"> مستوى جامعي </option>
                        </select>

                        <label htmlFor="text"  > ما هي صلتك بهاذا الموقع ؟ </label>
                        <textarea
                            id="Text"
                            type="text"
                            name="text"
                            placeholder="الحد الأدنى لعدد الأحرف هو 20 "
                            rows="3"
                            value={relation}
                            onChange={e => setR(e.target.value)}
                            className="text-right"
                        />

                        <label htmlFor="text"  > لماذا انت تسجل هنا ؟   </label>
                        <textarea
                            id="Text"
                            type="text"
                            name="text"
                            placeholder="الحد الأدنى لعدد الأحرف هو 20"
                            rows="3"
                            value={why}
                            onChange={e => setW(e.target.value)}
                            className="text-right"
                        />

                        <div className="d-flex justify-content-end">
                            <input type="submit" className="btn-card"
                                onClick={onSubmit} required
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

Registration.propTypes = {
    addReg: PropTypes.func.isRequired
};


export default connect(null, { addReg })(Registration);

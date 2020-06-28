import React ,{useState} from 'react'; 
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
    const [mode, setM] = useState("card");

    const onSubmit = async e => { 
    e.preventDefault();
    const newLog = {
        last_name ,
        first_name , 
        birth_place , 
        birthday , 
        address , 
        email , 
        phone ,
        school_year , 
        mode
    }

    const res = await addReg(newLog);


        if (res.status === "success") {
            setLN("");
            setFN("");
            setBP("");
            setB("");
            setA("");
            setE("");
            setP("");
            setS("");
            setM("card");
        } else {
            document.getElementById("not").classList = "text-danger text-right";

            setTimeout(function () {
                document.getElementById("not").classList = "d-none";
            }, 4000);
        }

    }

    return (
        <div className="d-flex justify-content-center w-full mt-10vh" >
            <div className="flex-column w-70-p w-94-mob"> 
                <div className="d-flex justify-content-center mb-5vh">
                    <h1 className="w-max"> <span className="text-primary">Reg</span>istration </h1>
                </div>
                <form className="card mb-10vh br-b" >
                    <header className="d-flex justify-content-center" >
                        <div className="d-flex w-80-p">
                            <i className="far fa-clipboard"></i>
                            <h5 className="text-mob-16" > Please don't register twice, thanks . </h5>
                        </div>
                    </header>
                    <div className="d-flex justify-content-center" >
                        <div className="w-80-p card-form" >
                            <label htmlFor="last" className="text-right" >اللقب </label>
                            <input
                                id="last"
                                type="text"
                                name="text"
                                placeholder="اللقب"
                                value={last_name}
                                onChange={e => setLN(e.target.value)}
                                className="text-right"
                            />
                            <label htmlFor="first" className="text-right" > الاسم </label>
                            <input
                                id="first"
                                type="text"
                                name="text"
                                placeholder="الاسم"
                                value={first_name}
                                onChange={e => setFN(e.target.value)}
                                className="text-right"
                            />
                            <label htmlFor="brt" className="text-right"  >تاريخ الميلاد </label>
                            <input
                                id="brt"
                                type="date"
                                name="text"
                                max="2015-00-01"
                                value={birthday}
                                onChange={e => setB(e.target.value)}
                            />
                            <label htmlFor="pbrt" className="text-right"  > مكان الميلاد  </label>
                            <input
                                id="pbrt"
                                type="text"
                                name="text"
                                placeholder="مكان الميلاد"
                                value={birth_place}
                                onChange={e => setBP(e.target.value)}
                                className="text-right"
                            />
                            <label htmlFor="adr" className="text-right" > العنوان  </label>
                            <input
                                id="adr"
                                type="text"
                                name="text"
                                placeholder="العنوان"
                                value={address}
                                onChange={e => setA(e.target.value)}
                                className="text-right"
                            />
                            <label htmlFor="eml" className="text-right" >البريد الالكتروني  </label>
                            <input
                                id="eml"
                                type="email"
                                name="text"
                                placeholder="البريد الالكتروني"
                                value={email}
                                onChange={e => setE(e.target.value)}
                                className="text-right"
                            />
                            <label htmlFor="phone" className="text-right" > الهاتف  </label>
                            <input
                                id="phone"
                                type="text"
                                name="text"
                                placeholder="الهاتف"
                                value={phone}
                                onChange={e => setP(e.target.value)}
                                className="text-right"
                            />
                            <label htmlFor="school" className="text-right" > المستوى   </label>
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

                            <div className="h-20-p mb-5">
                                <h5 className="text-danger text-right d-none" id="not" >الرجاء التؤكد من ان كل المعلومات صحيحة</h5>
                            </div>
                            <div className="d-flex justify-content-end">
                                <input type="submit" className="btn-card"
                                    onClick={onSubmit} required
                                /> 
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

Registration.propTypes = {
    addReg: PropTypes.func.isRequired
};


export default connect(null, { addReg })(Registration);

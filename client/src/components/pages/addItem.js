import React ,{useState, Fragment } from "react";
import { addItem } from "../../actions/itemsActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AddItemModel =  ({ addItem }) => {

    const [title, setTitle] = useState("");
    const [departure, setDP] = useState("");
    const [arrival, setAR] = useState("");
    const [date, setDA] = useState("");
    const [hour, setHR] = useState("");
    const [discription, setDc] = useState("");
    const [mode, setRl] = useState("item");
    const [registration, setRJ] = useState(false);
    const [file, setFile] = useState("");
    const [filename, setFileName] = useState("Choose File");
   

    const onChange = e => {
        setFile(e.target.files);
        setFileName(`${e.target.files.length} files .` );
    }

    
    const onSubmit = async e => {

        let i = 0;
        let images = [];


        e.preventDefault();
        let formData = new FormData();
    
      
        for (const prop in file) {
            if (prop !== "length" && prop !=="item"){
                const type = file[prop].name.split('.');
                let name = `${i}${Date.now()}.${type[1]}`;
                images.push(name);
                formData.append("file", file[prop]);
                formData.append("name",name);
               i++ ; 
            }
        }
        
       
        // setImg(imgs);
       
        
        const newLog = {
            title,
            discription,
            mode , 
            images , 
            registration , 
            departure , 
            arrival , 
            date , 
            hour
        };

        // console.log(images);
       const res = await addItem(newLog , formData);

        if (res.status ==="success" ){
        
            setTitle("");
            setAR("");
            setDA("");
            setDP("");
            setHR("");
            setDc("");
            setRl("item");
            setRJ(false); 
            setFile(""); 
            setFileName("Choose File");
        }else {
            document.getElementById("not").classList = "text-danger text-right";

            setTimeout(function () {
                document.getElementById("not").classList = "d-none";
            }, 4000);
        }
};

    return (
        <div className="d-flex justify-content-center w-full mt-10vh" >
            <div className="flex-column w-70-p w-94-mob">
                <div className="d-flex justify-content-center mb-5vh">
                    <h1 className="w-max"> <span className="text-primary">Add</span> Item </h1>
                </div>
                <form className="card mb-10vh br-b" >
                    <header className="d-flex justify-content-center" >
                        <div className="d-flex w-80-p">
                            <i className="far fa-clipboard"></i>
                            <h5 className="text-mob-16" > Only admin can do this action </h5>
                        </div>
                    </header>
                    <div className="d-flex justify-content-center" >
                        <div className="w-80-p card-form" >
                            <label htmlFor="text" className="text-right"  > العنوان </label>
                            <input
                                className="text-right"
                                id="text"
                                type="text"
                                name="text"
                                placeholder="العنوان"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            <label htmlFor="text2" className="text-right" > الموضوع </label>
                            <textarea
                                id="text2"
                                type="text"
                                name="text"
                                placeholder="الموضوع"
                                rows="10"
                                value={discription}
                                onChange={e => setDc(e.target.value)}
                                className="text-right"
                            />

                            <div className="custom-file mb-4">
                                {
                                    mode === "item" ? 
                                        <input type="file" className="custom-file-input" id="customFile" onChange={onChange} multiple /> : 
                                        <input type="file" className="custom-file-input" id="customFile" onChange={onChange} />
                                }
                                {/* <input type="file" className="custom-file-input" id="customFile" onChange={onChange} multiple/> */}
                                <label className="custom-file-label" htmlFor="customFile"> {filename} </label>
                            </div>
                            <div className="d-flex  flex-row-reverse">
                                <input type="checkbox" id="box" name="box" value="event" 
                                    onClick={e => mode === "item" ? setRl("event") : setRl("item")}
                                ></input>
                                {/* <label htmlFor="box" className="lh-9 ptr text-mob-14" > <span className="text-primary udr" > Click here</span> to add like an evenement  </label> */}
                                <label htmlFor="box" className="lh-9 ptr text-mob-14" > <span className="text-secondary udr mr-2" > اضغط هنا  </span> لاضافة حادث </label>
                            </div>

                            

                                {
                                    mode === "item" ? (
                                    <Fragment> 
                                        <label htmlFor="text3" className="text-right" > مكان الانطلاق </label>
                                    <input
                                        disabled
                                        id="text3"
                                        type="text"
                                        name="text"
                                        placeholder="مكان الانطلاق"
                                            className="text-right"
                                        // value={title}
                                        // onChange={e => setTitle(e.target.value)}
                                    />
                                    </Fragment>
                                     ): (
                                        <Fragment>
                                            <label htmlFor="text3" className="text-right"  > مكان الانطلاق </label>
                                            <input
                                                className="text-right"
                                                id="text3"
                                                type="text"
                                                name="text"
                                                placeholder="مكان الانطلاق"
                                            value={departure}
                                            onChange={e => setDP(e.target.value)}
                                            />
                                        </Fragment>
                                        ) }
                                {
                                    mode === "item" ? (
                                    <Fragment> 
                                    <label htmlFor="text4" className="text-right" > الوجهة </label>
                                    <input
                                        disabled
                                        id="text4"
                                        type="text"
                                        name="text"
                                            placeholder="الوجهة"
                                            className="text-right"
                                        // value={title}
                                        // onChange={e => setTitle(e.target.value)}
                                    />
                                    </Fragment>
                                     ): (
                                        <Fragment>
                                            <label htmlFor="text4" className="text-right"  >الوجهة </label>
                                            <input
                                                className="text-right"
                                                id="text4"
                                                type="text"
                                                name="text"
                                                placeholder="الوجهة"
                                            value={arrival}
                                            onChange={e => setAR(e.target.value)}
                                            />
                                        </Fragment>
                                        ) }
                                {
                                    mode === "item" ? (
                                    <Fragment>
                                    <label htmlFor="brt" className="text-right" > التاريخ</label>
                                    <input
                                        disabled
                                        id="brt"
                                        type="date"
                                        name="text"
                                        max="2015-00-01"
                                        placeholder="التاريخ"
                                        // value={birthday}
                                        // onChange={e => setB(e.target.value)}
                                    />
                                    </Fragment>
                                     ): (
                                        <Fragment>
                                            <label htmlFor="brt" className="text-right" > التاريخ</label>
                                            <input
                                                id="brt"
                                                type="date"
                                                name="text"
                                                max="2015-00-01"
                                                placeholder="التاريخ"
                                                value={date}
                                                onChange={e => setDA(e.target.value)}
                                            />
                                        </Fragment>
                                        ) }


                            {
                                mode === "item" ? (
                                    <Fragment>
                                        <label htmlFor="text3" className="text-right" > الساعة </label>
                                        <input
                                            disabled
                                            id="text3"
                                            type="text"
                                            name="text"
                                            placeholder="مثال : الثامنة صباحا"
                                            className="text-right"
                                        // value={title}
                                        // onChange={e => setTitle(e.target.value)}
                                        />
                                    </Fragment>
                                ) : (
                                        <Fragment>
                                            <label htmlFor="text3" className="text-right"  > الساعة </label>
                                            <input
                                                className="text-right"
                                                id="text3"
                                                type="text"
                                                name="text"
                                                placeholder="مثال : الثامنة صباحا"
                                            value={hour}
                                            onChange={e => setHR(e.target.value)}
                                            />
                                        </Fragment>
                                    )}


                            {
                                mode === "item" ? (<div className="d-flex flex-row-reverse">
                                    <input type="checkbox" id="box1" name="box" value="event" disabled
                                        onClick={() => registration === false ? setRJ(true) : setRJ(false)}
                                    ></input>
                                    <label htmlFor="box1" className="lh-9 ptr text-mob-14 text-gray" > <span className="text-grey udr mr-2" > اضغط هنا  </span> لاضافة حادث </label>
                                </div>) : (
                                        <div className="d-flex flex-row-reverse">
                                            <input type="checkbox" id="box1" name="box" value="event"
                                                onClick={() => registration === false ? setRJ(true) : setRJ(false)}
                                            ></input>
                                            <label htmlFor="box1" className="lh-9 ptr text-mob-14" > <span className="text-secondary udr mr-2" > اضغط هنا  </span> لاضافة حادث </label>
                                        </div>)}
                       
                           
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
    );
};

 
AddItemModel.propTypes = {
    addItem: PropTypes.func.isRequired
};


export default connect(null, { addItem })(AddItemModel);
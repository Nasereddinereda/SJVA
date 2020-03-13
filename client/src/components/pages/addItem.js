import React ,{useState } from "react";
import { addItem } from "../../actions/itemsActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Links from "../links/Links";
// import LinksFilter from "../links/LinksFilter";
// import { loadUser } from "../../action/authAction";
// import PropTypes from "prop-types";

const AddItemModel = ({ addItem }) => {
    // useEffect(() => {
    //     // console.log("redha");
    //     // loadUser();
    //     // eslint-disable-next-line
    // }, []);
    const [title, setTitle] = useState("");
    const [discription, setDc] = useState("");
    const [role, setRl] = useState("item");

    const onSubmit = e => {
        e.preventDefault();
        const newLog = {
            title,
            discription,
            role
        };

        
        addItem(newLog);
        // login(newLog);
        // Clear Fields

        // setEmail("");
        // setPs("");
    };

    return (
        <div className="d-flex justify-content-center w-full mt-10vh" >
            <div className="flex-column w-70-p">
                <div className="d-flex justify-content-center mb-5vh">
                    <h1 className="w-max"> <span className="text-primary">Add</span> Item </h1>
                </div>
                <form className="card mb-10vh" >
                    <header className="d-flex justify-content-center" >
                        <div className="d-flex w-80-p">
                            <i className="far fa-clipboard"></i>
                            <h5 className="" > Only admin can do this action </h5>
                        </div>
                    </header>
                    <div className="d-flex justify-content-center" >
                        <div className="w-80-p card-form" >
                            <label htmlFor="text"  > Title </label>
                            <input
                                id="text"
                                type="text"
                                name="text"
                                placeholder="Title"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            <label htmlFor="text"  > Discription </label>
                            <textarea
                                id="text"
                                type="text"
                                name="text"
                                placeholder="Title"
                                rows="10"
                                value={discription}
                                onChange={e => setDc(e.target.value)}
                            />
                            <div className="d-flex" >
                                
                                <input type="checkbox" id="box" name="box" value="event" 
                                    onClick={e => role === "item" ? setRl("event") : setRl("item")} 
                                 ></input>
                                <label htmlFor="box" className="lh-9 ptr" > <span className="text-primary udr" > Click here</span> to add like an evenement  </label>
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
import React,{useState} from 'react'
import { addCOM } from "../../actions/commentAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Comment = ({addCOM}) => {

    const [username, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [comment , setComment] = useState("");

    const onSubmit = async e => {
        e.preventDefault();
        const url = window.location.href;
        var item = url.substring(url.lastIndexOf('/') + 1);
        let newComment = {
            username , 
            email , 
            comment , 
            item
        }
        addCOM(newComment);
        setUser("");
        setEmail("");
        setComment("");

    }

    return (
        <div>
            <form className="card br-b mt-5 w-65-p float-right text-right w-100-mob" >
                    <header className="d-flex justify-content-center" >
                        <div className="d-flex w-80-p">
                            <i className="far fa-clipboard"></i>
                            <h5 className="" > Please don't register twice, thanks . </h5>
                        </div>
                    </header>
                    <div className="d-flex justify-content-center" >
                        <div className="w-80-p card-form" >
                        <label htmlFor="last"  > اسم المستخدم  </label>
                        <input
                            id="last"
                            type="text"
                            name="text"
                            placeholder="User Name"
                            value={username}
                            onChange={e => setUser(e.target.value)}
                        />
                        <label htmlFor="first"  > البريد الإلكتروني </label>
                        <input
                            id="first"
                            type="email"
                            name="text"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="text"  > التعليق</label>
                        <textarea
                            id="Text"
                            type="text"
                            name="text"
                            placeholder="Commentary"
                            rows="4"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
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

Comment.propTypes = {
    addCOM: PropTypes.func.isRequired
};


export default connect(null, { addCOM })(Comment);

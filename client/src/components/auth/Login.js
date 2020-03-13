import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import PropTypes from "prop-types";

const Login = ({ auth: { isAuthenticated }, login, ...props })=>{
    useEffect(() => {
        if (isAuthenticated) {
            props.history.push("/");
        }
    }, [isAuthenticated, props.history]);
    const [email, setEmail] = useState("");
    const [password, setPs] = useState("");
   
    const onSubmit = e => {
        e.preventDefault();
        const newLog = {
            email,
            password
        };

        // console.log(newLog);
        login(newLog);
        // Clear Fields

        // setEmail("");
        // setPs("");
    };
return(
    <div className="d-flex justify-content-center w-full mt-10vh" >
      
        <div className="flex-column w-50-p"> 
            <div className="d-flex justify-content-center mb-5vh">
                <h1 className="w-max"> <span className="text-primary">Log</span>in Admin </h1>
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
                    <label htmlFor="email"  > Email </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="password"> Password </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                    value={password}
                    onChange={e => setPs(e.target.value)}
                    />
                    <div className="d-flex justify-content-end">
                            <input type="submit" className="btn-card" onClick={onSubmit} required />
                    </div>
            </div>
                </div>
        </form>
        </div>
    </div>
);
}

Login.propTypes = {
    login: PropTypes.func.isRequired,

    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, { login })(Login);
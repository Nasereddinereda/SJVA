import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import PropTypes from "prop-types";

const Login = ({ auth: { isAuthenticated , error }, login, ...props })=>{
    
    useEffect(() => {
        if (isAuthenticated) {
            props.history.push("/");
        }
    }, [isAuthenticated, props.history , error]);
    
    
    const [email, setEmail] = useState("");
    const [password, setPs] = useState("");
   
    const onSubmit = async e => {
        e.preventDefault();
        const newLog = {
            email,
            password
        };

        const res = await login(newLog);

        if (res.status !== 200){
            document.getElementById("not").classList = "text-danger"; 

            setTimeout(function () { 
            document.getElementById("not").classList="d-none" ; 
            }, 4000);
            
        }

        // Clear Fields

        // setEmail("");
        // setPs("");
    };
return(
    <div className="d-flex justify-content-center w-full mt-10vh" >
      
        <div className="flex-column w-50-p w-94-mob"> 
            <div className="d-flex justify-content-center mb-5vh">
                <h1 className="w-max"> <span className="text-primary">Log</span>in Admin </h1>
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
                    <div className="h-20-p mb-4">
                        <h5 className="text-danger d-none" id="not" > Incorrect email or password </h5>
                    </div>

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
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { loadUser } from "../../actions/authActions";

const Tryro = ({
  auth: { isAuthenticated, loading },
  loadUser,
  component: Component,
  ...rest
}) => {
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <Route
      {...rest}
      render={props =>
        (!isAuthenticated && !loading) ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};
Tryro.propTypes = {
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { loadUser })(Tryro);

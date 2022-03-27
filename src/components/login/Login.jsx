import React, { useState } from "react";
import "./style/login.css";
import { connect } from "react-redux";
import { getAcountTC } from "src/redux/reducers/AuthorizationReducer";
import { NavLink } from "react-router-dom";

const LogIn = (props) => {
  const [value, setValue] = useState({
    login: "",
    password: "",
  });
  const change = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const getAcount = () => {
    props.getAC(value);
  };
  return (
    <div className="logIn">
      <p>Մուտքագրեք տվյալները</p>
      <div>
        <input
          type={"login"}
          name="login"
          value={value.login}
          onChange={change}
          placeholder="Օգտանուն*"
        />
        <input
          type={"password"}
          name="password"
          value={value.password}
          onChange={change}
          placeholder="Գաղտնաբառ/գեներացված կոդ*"
        />
        <NavLink to="/">
          <button onClick={getAcount}>Մուտք գործել</button>
        </NavLink>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    authorization: state.authorization,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAC: (data) => dispatch(getAcountTC(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

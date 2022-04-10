import React, { useState } from "react";
import style from "./style/login.module.scss";
import { connect } from "react-redux";
import { getAcountTC } from "src/redux/reducers/AuthorizationReducer";
import { NavLink } from "react-router-dom";
import car from "src/resource/img/car.png";

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
    <section>
      <div className={style.logIn}>
        <p>Մուտքագրեք տվյալները</p>
        <div className={props.authorization.error ? style.red : ""}>
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
          <button onClick={getAcount}>Մուտք գործել</button>
        </div>
      </div>
      <div className={style.img}>
        <img src={car} alt="car" className={style.img_car} />
      </div>
    </section>
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

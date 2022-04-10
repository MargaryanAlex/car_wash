import React, { useState } from "react";
import { connect } from "react-redux";
import { signUpTC } from "src/redux/reducers/AuthorizationReducer";
import style from "./style/login.module.scss";
import car from "src/resource/img/car.png";

const Registration = (props) => {
  const [value, setValue] = useState({
    login: "",
    name: "",
    surname: "",
    password: "",
    password2: "",
    code: "",
  });
  const change = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <section>
      <div
        className={style.logIn}
        style={{ height: "35%", alignSelf: "stretch" }}
      >
        <p>Ստեղծել նոր հաշիվ</p>
        <div>
          <input
            type={"login"}
            name="login"
            value={value.login}
            onChange={change}
            placeholder="Օգտանուն*"
          />
          <input
            type={"name"}
            name="name"
            value={value.name}
            onChange={change}
            placeholder="Անուն*"
          />
          <input
            type={"surname"}
            name="surname"
            value={value.surname}
            onChange={change}
            placeholder="Ազգանուն*"
          />
          <input
            type={"password"}
            name="password"
            value={value.password}
            onChange={change}
            placeholder="Գաղտնաբառ*"
          />
          <input
            type={"password"}
            name="password2"
            value={value.password2}
            onChange={change}
            placeholder="Կրկնել գաղտնաբառը*"
          />
          <input
            type={"text"}
            name="code"
            value={value.code}
            onChange={change}
            placeholder="Լրացնել կոդը*"
          />
          <button
            onClick={() => {
              if (value.password == value.password2) {
                console.log(value);
                props.signUp(value);
              }
            }}
          >
            Մուտք գործել
          </button>
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
    registration: state.registration,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (data) => dispatch(signUpTC(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Registration);

import React, { useState } from "react";
import "./style/login.css";

const Registration = () => {
  const [value, setValue] = useState({});
  const change = (e) => {
    console.log(e);
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div className="logIn" style={{ height: "35%", alignSelf: "stretch" }}>
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
        <button>Մուտք գործել</button>
      </div>
    </div>
  );
};

export default Registration;

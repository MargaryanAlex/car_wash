import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logOutAC } from "src/redux/reducers/AuthorizationReducer";
import { connect } from "react-redux";

import logoWhite from "src/resource/img/logoWhite.svg";
import bars from "src/resource/icons/bars.svg";
import settings from "src/resource/icons/settings.svg";
import info from "src/resource/icons/info.svg";
import signOut from "src/resource/icons/signOut.svg";

const SideBar = (props) => {
  let history = useNavigate();
  let location = useLocation();
  useEffect(() => {
    if (location.pathname == "/") {
      document.querySelectorAll(".sideTab").forEach((item) => {
        item.classList.remove("active");
      });
    }
  }, [location]);

  const handleClick = (e) => {
    document.querySelectorAll(".sideTab").forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
  };
  const clearActive = () => {
    document.querySelectorAll(".sideTab").forEach((item) => {
      item.classList.remove("active");
    });
  };

  return (
    <div className="list">
      <div>
        <div className="head">
          <Link onClick={clearActive} to={"/"}>
            {" "}
            <img src={logoWhite} alt="logo" width="100" />
          </Link>
          <img src={bars} alt="bars" />
        </div>
        <ul className="ul-list">
          {props.data.map((item, index) => {
            return (
              <li key={index} onClick={handleClick}>
                <Link
                  style={{ textDecoration: "none" }}
                  className="sideTab"
                  to={item.url}
                >
                  <img src={item.img} alt="icon" /> {item.text}
                </Link>
              </li>
            );
          })}
          <li
            onClick={() => {
              props.logOut();
              history("/login");
            }}
          >
            <img src={signOut} alt="icon" />
            Դուրս գալ
          </li>
        </ul>
      </div>
      <div className="foot">
        <img src={settings} alt="settings" style={{ paddingRight: "5px" }} />
        <img src={info} alt="info" />
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
    logOut: (data) => dispatch(logOutAC(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

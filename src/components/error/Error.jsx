import React from "react";
import style from "../error/error.module.css";
import error from "src/resource/img/error.png";

const Error = (props) => {
  return (
    <div className={style.home_page}>
      {props.isLogin ? (
        <div className={style.left_side}>
          <h1>Oops... an internal server error!</h1>
          <p style={{ margin: "0" }}>
            Try refreshing page or try later. <br />
            Our apologies.
          </p>
          <button className={style.reload}>Reload</button>
        </div>
      ) : (
        ""
      )}
      <div className={style.right_side}>
        <img src={error} alt="error" />
      </div>
    </div>
  );
};

export default Error;

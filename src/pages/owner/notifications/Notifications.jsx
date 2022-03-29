import React, { useEffect } from "react";
import style from "./notifications.module.css";

import exclamation from "src/resource/icons/exclamation.svg";
import ellipsis from "src/resource/icons/ellipsis.svg";
import { getNotificationTC } from "src/redux/reducers/NotificationReducer";
import { connect } from "react-redux";

const Notifications = (props) => {
  localStorage.removeItem("id");
  useEffect(() => {
    props.getNotification();
    console.log(style);
  }, []);
  return (
    <div className={style.home_page}>
      <h1> Ծանուցումներ</h1>
      <hr />
      <div className={style.form_container}>
        <div className={style.form2}>
          {props.notification.data.length > 0 ? (
            props.notification.data.map((item, index) => {
              return (
                <div className={style.notification} key={index}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "300px",
                    }}
                  >
                    <img src={exclamation} alt="exclamation" width="25" />
                    <p style={{ margin: "0", whiteSpace: "nowrap" }}>
                      {item.device_code} Սարքի սխալ, կոդը
                    </p>
                    <p className={style.code} style={{ margin: "0" }}>
                      {item.msg}
                    </p>
                  </div>
                  <div className={style.date}>
                    {item.creation_date}
                    <img src={ellipsis} alt="exclamation" width="25" />
                  </div>
                </div>
              );
            })
          ) : (
            <div
              className={style.notification}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: "20px" }}> THER ARE NO RESULT </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    notification: state.notifications,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNotification: () => dispatch(getNotificationTC()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

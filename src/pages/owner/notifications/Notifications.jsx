import React from "react";
import "./notifications.css";

import exclamation from "src/resource/icons/exclamation.svg";
import ellipsis from "src/resource/icons/ellipsis.svg";

const Notifications = () => {
  localStorage.removeItem("id");

  return (
    <div className="home-page">
      <h1> Ծանուցումներ</h1>
      <hr />
      <div className="form-container">
        <div className="form2">
          <div className="notification">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={exclamation} alt="exclamation" width="25" />
              <p style={{ margin: "0", whiteSpace: "nowrap" }}>
                Սարքի սխալ, կոդը
              </p>
              <p className="code" style={{ margin: "0" }}>
                code
              </p>
            </div>
            <div className="date">
              date
              <img src={ellipsis} alt="exclamation" width="25" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

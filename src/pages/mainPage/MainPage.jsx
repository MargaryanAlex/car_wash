import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { chekAuthTC } from "src/redux/reducers/AuthorizationReducer";
import { Oval } from "react-loader-spinner";

import style from "./style/mainPage.module.scss";

//Components
import Header from "src/components/header/Header";
import Footer from "src/components/footer/Footer";
import Login from "src/components/login/Login";
import Registration from "src/components/login/Registration";
import SideBar from "src/components/sidebar/SideBar";
import Error from "src/components/error/Error";

//Resource
import admin from "src/resource/icons/admin.svg";
import owner from "src/resource/icons/owner.svg";
import notifications from "src/resource/icons/notifications.svg";
import devices from "src/resource/icons/devices.svg";
import notificationsWhite from "src/resource/icons/notificationsWhite.svg";

//Pages
import AdminHomePage from "src/pages/admin/Home.page";
import AddUser from "src/pages/admin/add-user/AddUser";
import OwnerHomePage from "src/pages/owner/Home.page";
import Owners from "src/pages/admin/owners/Owners";
import Devices from "src/pages/admin/devices/Devices";
import DevicesMore from "src/pages/owner/devices/Devices";
import Notifications from "src/pages/admin/notifications/Notifications";
import OwnerNotifications from "src/pages/owner/notifications/Notifications";
import AddDevices from "src/pages/admin/add-devices/AddDevices";

const MainPage = (props) => {
  useEffect(() => {
    console.log(document.location);
    if (localStorage.getItem("success")) {
      props.chekAuth();
    }
  }, [props.authorization.refresh_token]);

  if (props.authorization.loader) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Oval color="#33BFff" height="20vh" width="100%" margin="0 auto" />
      </div>
    );
  } else {
    switch (props.authorization.obj.role_name) {
      case "admin":
        return (
          <BrowserRouter>
            <Header text="?????????????? ????" link="/" />
            <div className={style.home_container}>
              <SideBar
                data={[
                  { url: "/addUser", img: admin, text: "?????????????? ??????????????" },
                  {
                    url: "/notifications",
                    img: notifications,
                    text: "????????????????????????",
                  },
                  { url: "/owner", img: owner, text: "??????????????????????????" },
                  { url: "/devices", img: devices, text: "????????????" },
                ]}
              />

              <Routes>
                <Route path="/addUser" element={<AddUser />} />
                <Route path="/add_devices" element={<AddDevices />} />
                <Route path="/owner" element={<Owners />} />
                <Route path="/devices" element={<Devices />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/" element={<AdminHomePage />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </BrowserRouter>
        );
        break;

      case "owner":
        return (
          <BrowserRouter>
            <Header text="?????????????? ????" link="/" />
            <div className={style.home_container}>
              <SideBar
                data={[
                  {
                    url: "/notifications",
                    img: notificationsWhite,
                    text: "????????????????????????",
                  },
                  { url: "/devices", img: devices, text: "????????????" },
                ]}
              />
              <Routes>
                <Route path="/devices" element={<DevicesMore />} />
                <Route path="/notifications" element={<OwnerNotifications />} />
                <Route path="/" element={<OwnerHomePage />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </BrowserRouter>
        );
      default:
        return (
          <BrowserRouter>
            <Header text="??????????" link="/login" />
            <div>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Registration />} />
                <Route path="*" element={<Error isLogin={true} />} />
              </Routes>
            </div>
            <div>
              <Footer />
            </div>
          </BrowserRouter>
        );
        break;
    }
  }
};
const mapStateToProps = (state) => {
  return {
    authorization: state.authorization,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    chekAuth: () => dispatch(chekAuthTC()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

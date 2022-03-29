import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { chekAuthTC } from "src/redux/reducers/AuthorizationReducer";
import { Oval } from "react-loader-spinner";

import "./style/mainPage.css";

//Components
import Header from "src/components/header/Header";
import Footer from "src/components/footer/Footer";
import Login from "src/components/login/Login";
import Registration from "src/components/login/Registration";
import SideBar from "src/components/sidebar/SideBar";

//Resource
import car from "src/resource/img/car.png";
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
  const [isHomePressed, setIsHomePreessed] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("success")) {
      props.chekAuth();
    }
  }, [props.authorization.refresh_token]);
  const chekHomePressed = (v) => {
    setIsHomePreessed(v);
  };
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
            <Header text="Գլխավոր էջ" link="/" />
            <div className="home-container">
              <SideBar
                data={[
                  { url: "/addUser", img: admin, text: "Ստեղծել օգտատեր" },
                  {
                    url: "/notifications",
                    img: notifications,
                    text: "Ծանուցումներ",
                  },
                  { url: "/owner", img: owner, text: "Սեփականատերեր" },
                  { url: "/devices", img: devices, text: "Սարքեր" },
                ]}
              />
              <Routes>
                <Route path="/addUser" element={<AddUser />} />
                <Route path="/add_devices" element={<AddDevices />} />
                <Route path="/owner" element={<Owners />} />
                <Route path="/devices" element={<Devices />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/" element={<AdminHomePage />} />
              </Routes>
            </div>
          </BrowserRouter>
        );
        break;

      case "owner":
        return (
          <BrowserRouter>
            <Header text="Գլխավոր էջ" link="/" />
            <div className="home-container container">
              <SideBar
                data={[
                  {
                    url: "/notifications",
                    img: notificationsWhite,
                    text: "Ծանուցումներ",
                  },
                  { url: "/devices", img: devices, text: "Սարքեր" },
                ]}
              />
              <Routes>
                <Route path="/devices" element={<DevicesMore />} />
                <Route path="/notifications" element={<OwnerNotifications />} />
                <Route path="/" element={<OwnerHomePage />} />
              </Routes>
            </div>
          </BrowserRouter>
        );
      default:
        return (
          <BrowserRouter>
            <Header text="Մուտք" link="/login" />
            <section>
              <Routes>
                <Route path="/logIn" element={<Login />} />
                <Route path="/" element={<Registration />} />
              </Routes>

              <div className="img">
                <img src={car} alt="car" className="img-car" />
              </div>
            </section>
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

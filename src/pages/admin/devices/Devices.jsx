import React, { useEffect } from "react";
import { connect } from "react-redux";

import style from "./devices.module.css";

import List from "src/components/list/List";

import { getDevicesTC } from "src/redux/reducers/DevicesReducer";

const Owners = (props) => {
  localStorage.removeItem("id");

  useEffect(() => {
    props.getDevices();
  }, [props.devices.refresh]);
  return (
    <div className={style.home_page}>
      <h1>Սարքեր</h1>

      <p>ներկայիս քանակն է {props.devices.data.length}</p>
      <List
        data={[
          {
            name: "Օգտատեր",
            ownName: "Կոդ",
            numberOfDivaces: "Թարմացում",
            statustable: "Կարգավիճակ",
          },

          ...props.devices.data,
        ]}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    devices: state.devices,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDevices: () => {
      dispatch(getDevicesTC());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Owners);

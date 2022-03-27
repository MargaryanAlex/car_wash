import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./devices.css";

import List from "src/components/list/List";
import { getDevicesMoreTC } from "src/redux/reducers/DevicesReducer";

const Owners = (props) => {
  useEffect(() => {
    props.getDevices();
  }, [props.devices.refresh]);
  return (
    <div className="Owners home-page">
      <h1>Սարքեր</h1>

      <p>ներկայիս քանակն է </p>
      <List
        data={[
          {
            name: "Օգտատեր",
            ownName: "Կոդ",
            water: "Ջուր",
            lather: "Փրփուր",
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
      dispatch(getDevicesMoreTC());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Owners);

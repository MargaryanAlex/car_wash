import React, { useEffect } from "react";
import { connect } from "react-redux";

import style from "./owners.module.css";

import List from "src/components/list/List";
import {
  getOwnersMoreInfoTC,
  getTicketTC,
} from "src/redux/reducers/UsersReducer";
const Owners = (props) => {
  localStorage.removeItem("id");

  useEffect(() => {
    props.getOwnersInfo();
  }, [props.users.refresh]);
  return (
    <div className={`${style.owners} ${style.home_page}`}>
      <h1>Սեփականատերեր</h1>

      <p>Աշխատակիցների ցանկ</p>
      <List
        data={[
          {
            name: "Օգտանուն",
            ownName: "Կոդ",
            numberOfDivaces: "Ստեղծման ամսաթիվ",
            statustable: "Կարգավիճակ",
          },

          ...props.users.data,
        ]}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    owners: state.owners,
    users: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getTicket: () => {
      dispatch(getTicketTC());
    },

    getOwnersInfo: () => {
      dispatch(getOwnersMoreInfoTC());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Owners);

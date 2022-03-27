import React from "react";

import Table from "src/components/table/Table";

import "./home-page.css";
import { connect } from "react-redux";

const HomePage = (props) => {
  localStorage.removeItem("id");

  return (
    <div className="home-page">
      <h1>Գլխավոր</h1>
      <p>Անձնական տվյալներ</p>
      <Table
        data={[
          {
            key: "Օգտանուն։",
            type: "login",
            placeholder: props.authorization.obj.user_name,
          },
          {
            key: "Անուն։",
            type: "name",
            placeholder: props.authorization.obj.first_name,
          },
          {
            key: "Ազգանուն։",
            type: "surname",
            placeholder: props.authorization.obj.last_name,
          },
          {
            key: "Օգտագործողի կարգավիճակ։",
            type: "text",
            placeholder: props.authorization.obj.role_name,
          },
        ]}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    authorization: state.authorization,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

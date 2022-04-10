import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { sendEmail } from "src/api/api";
import List from "src/components/list/List";
import Input from "src/components/input/Input.component";
import Button from "src/components/button/Button.component";

// import "./style/home-page.css";
import style from "./add-user.module.css";
import refresh from "src/resource/icons/refresh.svg";
import { getOwnersInfoTC, getTicketTC } from "src/redux/reducers/UsersReducer";
const AddUser = (props) => {
  const [value, setValue] = useState({
    email: "",
  });
  useEffect(() => {
    props.getOwnersInfo();
  }, [props.users.refresh]);
  return (
    <div className={style.home_page}>
      <h1>Ստեղծել կոդ</h1>
      <p>ստեղծել 20 նիշ ունեցող կոդ</p>
      <hr />
      <div className={style.form_container2}>
        <div className={style.form}>
          <div className={style.left_side}>
            <div className={style.code}>
              <span>{props.users.userTicket}</span>

              <div onClick={props.getTicket} style={{ margin: "6.5px 4px" }}>
                <img src={refresh} />
              </div>
            </div>
          </div>
          <div className={style.right_side}>
            <Input
              style={{ beckground: "1px solid #bababa" }}
              type="email"
              name="email"
              value={value.email}
              onChange={(e) => {
                setValue({ [e.target.name]: e.target.value });
              }}
            />
            <div className={style.btns}>
              <Button style={{ marginRight: "27px" }}>Ջնջել ամբողջը</Button>
              <Button
                onClick={() => sendEmail(props.users.ticketID, value.email)}
              >
                Ուղարկել կոդը
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.block}>
        <h1 style={{ paddingTop: "25px", marginLeft: "18px" }}>
          Առանց կարգավիճակ
        </h1>
        <hr style={{ border: "1px solid #EEECEC" }} />
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
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    authorization: state.authorization,
    users: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getTicket: () => {
      dispatch(getTicketTC());
    },

    getOwnersInfo: () => {
      dispatch(getOwnersInfoTC());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddUser);

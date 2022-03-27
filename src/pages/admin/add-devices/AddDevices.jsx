import React, { useState } from "react";
import { creatDevice } from "src/api/api";
import Input from "src/components/input/Input.component";
import Button from "src/components/button/Button.component";

// import "./style/home-page.css";
import "./add-devices.css";

const AddDevices = (props) => {
  const [value, setValue] = useState({
    code: "",
  });

  return (
    <div className="home-page">
      <h1> Ավելացնել սարք</h1>
      <hr />
      <div className="form-container">
        <div className="form">
          <div>
            <p style={{ marginBottom: "5px" }}>
              Ավելացնել սարքաորման տվյալները
            </p>
            <Input
              type="text"
              name="code"
              value={value?.code}
              palceholder="Լրացնել սարքի կոդը*"
              onChange={(e) => {
                setValue({ [e.target.name]: e.target.value });
              }}
            />
          </div>
          <div className="btns">
            <Button style={{ marginRight: "27px" }}>Ջնջել ամբողջը</Button>
            <Button onClick={() => creatDevice(value.code)}>
              Ուղարկել կոդը
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDevices;

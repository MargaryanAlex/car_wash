import React, { useState } from "react";
import style from "./table.module.css";

const Table = (props) => {
  const [value, setValue] = useState({
    login: "",
    password: "",
  });
  const change = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <table className={style.table}>
      <tbody >
        {props.data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.key}</td>
              <td>
                <input
                  onChange={change}
                  type={item.type}
                  name={item.type}
                  placeholder={item.placeholder}
                  disabled={true}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

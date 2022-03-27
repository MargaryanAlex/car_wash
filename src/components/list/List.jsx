import React, { useState } from "react";
import "src/components/list/style/list.css";
import statusGreen from "src/resource/icons/StatusGreen.svg";
import statusRed from "src/resource/icons/StatusRed.svg";
import options from "src/resource/icons/options.svg";
import closeButton from "src/resource/icons/closeButton.svg";
import { useNavigate } from "react-router-dom";
const List = (props) => {
  let history = useNavigate();

  const [isShow, setIsShow] = useState("");
  return (
    <table className="listBlock">
      <tbody>
        {props.data.map((item, index) => {
          return (
            <tr key={index} className="row" id={item.id}>
              {item.surname ? (
                <td>
                  <span>{item.surname}</span>
                </td>
              ) : item.surname === null ? (
                <td>-</td>
              ) : null}
              {item.name ? (
                <td>
                  <span>{item.name}</span>
                </td>
              ) : item.name === null ? (
                <td>-</td>
              ) : null}
              {item.ownName ? (
                <td>
                  <span>{item.ownName}</span>
                </td>
              ) : item.ownName === null ? (
                <td>-</td>
              ) : null}
              {item.water ? (
                <td>
                  <span>{item.water}</span>
                </td>
              ) : item.water === null ? (
                <td>-</td>
              ) : null}
              {item.lather ? (
                <td>
                  <span>{item.lather}</span>
                </td>
              ) : item.lather === null ? (
                <td>-</td>
              ) : null}
              {item.numberOfDivaces ? (
                <td>
                  <span>{item.numberOfDivaces}</span>
                </td>
              ) : item.numberOfDivaces === null ? (
                <td>-</td>
              ) : null}
              {item.statustable ? (
                <td colSpan={2}>
                  <span>{item.statustable}</span>
                </td>
              ) : null}
              {item.icons ? (
                <td>
                  <span className="icons">
                    <span className="left-icons">
                      <span
                        className="status"
                        onClick={() => {
                          console.log(item.status);
                          item.onclickStatus();
                        }}
                      >
                        {item.status ? (
                          <img src={statusGreen} alt="Status GOOD" />
                        ) : (
                          <img src={statusRed} alt="Status BAD" />
                        )}
                      </span>
                      {item.closeButton ? (
                        <span>
                          <img
                            src={closeButton}
                            alt="close"
                            onClick={item.onclickClose}
                          />
                        </span>
                      ) : null}
                    </span>
                  </span>
                </td>
              ) : null}
              {item.settings ? (
                <td className="options">
                  <img
                    src={options}
                    alt="close"
                    onClick={() => {
                      setIsShow(`row${index}`);
                    }}
                  />
                  <span
                    className={isShow == `row${index}` ? "menu show" : "menu"}
                  >
                    {item.settings.map((setting, settingIndex) => {
                      return (
                        <span
                          key={settingIndex}
                          onClick={(e) => {
                            if (setting.oncl == "nav" && item.user_id) {
                              console.log(item.user_id);
                              localStorage.setItem("id", item.user_id);
                              history("/add_devices");
                            } else {
                              e.target.style.color = "red";

                              setTimeout(() => {
                                e.target.style.transition = "none";

                                e.target.style.color = "black";
                              }, 200);
                            }
                          }}
                        >
                          {setting.img ? (
                            <img src={setting.img} alt="icon" />
                          ) : (
                            ""
                          )}
                          {setting.text ? setting.text : setting}
                        </span>
                      );
                    })}
                  </span>
                </td>
              ) : null}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;

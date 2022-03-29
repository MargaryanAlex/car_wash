import { request } from "src/api/api";

const CLEAR_DATA = "CLEAR_DATA";
const SET_DATA = "SET_DATA";
const REFRESH = "REFRESH";
const notificationState = {
  data: [],
  refresh: 0,
};

const notificationReducer = (state = notificationState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: [
          ...state.data,
          {
            creation_date: action.data.creation_date,
            device_code: action.data.device_code,
            id: action.data.id,
            msg: action.data.msg,
          },
        ],
      };
    case CLEAR_DATA:
      return {
        ...state,
        data: [],
      };
    case REFRESH:
      return {
        ...state,
        refresh: state.refresh + 1,
      };
    default:
      return {
        ...state,
      };
  }
};
export default notificationReducer;

export const setDataAC = (data) => ({ type: SET_DATA, data });
export const clearDataAC = () => ({ type: CLEAR_DATA });
export const refreshAC = () => ({ type: REFRESH });

export const getNotificationTC = () => {
  return (dispatch) => {
    request("/device_payment", "get").then((res) => {
      if (!res.obj.msg) {
        res?.obj?.map((item, index) => {
          request(`/device_payment/${item}`, "get").then((response) => {});
        });
      }
    });
    request("/device_error", "get").then((res) => {
      if (!res.obj.msg) {
        res.obj.map((item, index) => {
          request(`/device_error/${item}`, "get")
            .then((response) => {
              dispatch(setDataAC(response.obj));
            })
            .catch((e) => console.log(e));
        });
      }
    });
  };
};

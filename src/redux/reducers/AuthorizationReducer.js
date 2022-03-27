import axios from "axios";
import { API_URL, request } from "src/api/api";

const authorizationState = {
  obj: {
    first_name: "",
    last_name: "",
    role_name: "",
    user_name: "",
  },
  loader: false,
  refresh_token: "",
};
const GET_PROFILE = "GET_PROFIL";
const LOG_IN = "LOG_IN";
const LOADER = "LOADER";
const LOG_OUT = "LOG_OUT";
const authorizationReducer = (state = authorizationState, action) => {
  switch (action.type) {
    case LOG_IN:
      localStorage.setItem("success", action.data.success);
      localStorage.setItem("access_token", action.data.obj.access_token);
      localStorage.setItem("refresh_token", action.data.obj.refresh_token);
      return {
        ...state,
        success: true,
        refresh_token: action.data.obj.refresh_token,
      };
    case LOADER:
      return { ...state, loader: action.data };
    case GET_PROFILE:
      return {
        ...state,
        obj: {
          first_name: action.data.obj.first_name,
          last_name: action.data.obj.last_name,
          role_name: action.data.obj.role_name,
          user_name: action.data.obj.user_name,
        },
        success: action.data.success,
      };
    case LOG_OUT:
      localStorage.clear();

      return {
        ...state,
        obj: {
          first_name: "",
          last_name: "",
          role_name: "",
          user_name: "",
        },
        loader: false,
        refresh_token: "",
      };

    default:
      return state;
  }
};
export default authorizationReducer;

export const getProfileAC = (data) => ({ type: GET_PROFILE, data });
export const logInAC = (data) => ({ type: LOG_IN, data });
export const loaderAC = (data) => ({ type: LOADER, data });
export const logOutAC = () => ({ type: LOG_OUT });

export const getAcountTC = (value) => {
  return (dispatch) => {
    axios
      .post(API_URL + "/auth", {
        name: value.login,
        password: value.password,
      })
      .then(function (response) {
        dispatch(logInAC(response.data));
      })
      .catch(function (error) {
        console.log("error");
      });
  };
};
export const chekAuthTC = () => {
  return (dispatch) => {
    if (localStorage.getItem("success")) {
      dispatch(loaderAC(true));
    }
    request("/auth", "get")
      .then((response) => {
        dispatch(getProfileAC(response));
        dispatch(loaderAC(false));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

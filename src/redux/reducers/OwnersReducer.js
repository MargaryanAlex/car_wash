import { request } from "src/api/api";
const CLEAR_DATA = "CLEAR_DATA";
const SET_DATA = "SET_DATA";
const REFRESH = "REFRESH";
const ownerState = {
  data: [
    {
      surname: "",
      name: "",
      ownName: "",
      numberOfDivaces: "",
      statustable: "",
      icons: "",
      status: "",
      closeButton: "",
      onclickStatus: "",
      onclickClose: "",
      settings: "",
    },
  ],
  refresh: 0,
};
const ownerReducer = (state = ownerState, action) => {
  switch (action.type) {
    case CLEAR_DATA:
      return {
        ...state,
        data: [
          {
            surname: "",
            name: "",
            ownName: "",
            numberOfDivaces: "",
            statustable: "",
            icons: "",
            status: "",
            closeButton: "",
            onclickStatus: "",
            onclickClose: "",
            settings: "",
          },
        ],
      };

    case REFRESH:
      return {
        ...state,
        refresh: state.refresh + 1,
      };
    case SET_DATA:
      return {
        ...state,

        data: [
          ...state.data,
          {
            name: action.data.name,
            ownName: action.data.ownName,
            numberOfDivaces: action.data.numberOfDivaces,
            icons: action.data.icons,
            status: action.data.status,
            closeButton: action.data.closeButton,
            onclickClose: action.data.onclickClose,
            onclickStatus: action.data.onclickStatus,
          },
        ],
      };
    default:
      return state;
  }
};
export default ownerReducer;
export const refreshAC = () => ({ type: REFRESH });
export const setDataAC = (data) => ({ type: SET_DATA, data });
export const clearDataAC = () => ({ type: CLEAR_DATA });

export const getCarWashsTC = () => {
  return (dispatch) => {
    request("/ticket/owner", "get").then((response) => {
      dispatch(clearDataAC());
      response.obj.map((item, index) => {
        dispatch(
          setDataAC({
            name: item.user_name,
            ownName: item.code,
            numberOfDivaces: item.expiration_date,
            icons: true,
            status: item.active,
            closeButton: true,
            settings: "asda",
            onclickStatus: () => {
              request(`/ticket/${item.id}`, "put").then(() =>
                dispatch(refreshAC())
              );
            },
            onclickClose: () => {
              request(`/ticket/${item.id}`, "delete").then(() =>
                dispatch(refreshAC())
              );
            },
          })
        );
      });
    });
  };
};

import { request } from "src/api/api";
const CLEAR_DATA = "CLEAR_DATA";
const SET_DATA = "SET_DATA";
const REFRESH = "REFRESH";
const deivcesState = {
  data: [
    {
      surname: "",
      name: "",
      ownName: "",
      water: "",
      lather: "",
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
const deivcesReducer = (state = deivcesState, action) => {
  switch (action.type) {
    case CLEAR_DATA:
      return {
        ...state,
        data: [
          {
            surname: "",
            name: "",
            ownName: "",
            water: "",
            lather: "",
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
            water: action.data.water,
            lather: action.data.lather,
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
export default deivcesReducer;
export const refreshAC = () => ({ type: REFRESH });
export const setDataAC = (data) => ({ type: SET_DATA, data });
export const clearDataAC = () => ({ type: CLEAR_DATA });

export const getDevicesMoreTC = () => {
  return (dispatch) => {
    dispatch(clearDataAC());
    request("/device", "get").then((response) => {
      response.obj.map((item, index) => {
        request(`/device/${item}`, "get").then((res) => {
          request(`/user/${res.obj.owner_id}`, "get").then((respo) => {
            dispatch(
              setDataAC({
                name: respo.obj.first_name,
                ownName: res.obj.code,
                water: res.obj.water ? "Կա" : "Չկա",
                lather: res.obj.lather ? "Կա" : "Չկա",
                numberOfDivaces: res.obj.last_update,
                icons: true,
                status: res.obj.active,
                closeButton: true,
                onclickStatus() {
                  dispatch(refreshAC());
                },
                onclickClose: () => {
                  dispatch(refreshAC());
                },
              })
            );
            console.log(res.obj);
          });
        });
      });
    });
  };
};
export const getDevicesTC = () => {
  return (dispatch) => {
    dispatch(clearDataAC());
    request("/device", "get").then((response) => {
      response.obj.map((item, index) => {
        request(`/device/${item}`, "get").then((res) => {
          request(`/user/${res.obj.owner_id}`, "get").then((respo) => {
            dispatch(
              setDataAC({
                name: respo.obj.first_name,
                ownName: res.obj.code,
                numberOfDivaces: res.obj.last_update,
                icons: true,
                status: res.obj.active,
                closeButton: true,
                onclickStatus() {
                  this.status = !this.status;
                  // dispatch(refreshAC());
                },
                onclickClose: () => {
                  // dispatch(refreshAC());
                },
              })
            );
          });
        });
      });
    });
  };
};

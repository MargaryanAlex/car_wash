import { request } from "src/api/api";

const usersState = {
  userTicket: "",
  ticketID: "",
  data: [],
  refresh: 0,
};
const SET_TICKET = "SET_TICKE";
const SET_DATA = "SET_DATA";
const REFRESH = "REFRESH";
const CLEAR_DATA = "CLEAR_DATA";
const usersReducer = (state = usersState, action) => {
  switch (action.type) {
    case CLEAR_DATA:
      return {
        ...state,
        data: [],
      };
    case SET_TICKET:
      return {
        ...state,
        userTicket: action.data.code,
        ticketID: action.data.id,
        refresh: state.refresh + 1,
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
            user_id:action.data.user_id,

            name: action.data.name,
            ownName: action.data.ownName,
            numberOfDivaces: action.data.numberOfDivaces,
            icons: action.data.icons,
            status: action.data.status,
            closeButton: action.data.closeButton,
            onclickClose: action.data.onclickClose,
            onclickStatus: action.data.onclickStatus,
            settings: action.data.settings,
          },
        ],
      };
    default:
      return state;
  }
};
export default usersReducer;

export const setTicketAC = (data) => ({ type: SET_TICKET, data });
export const setDataAC = (data) => ({ type: SET_DATA, data });
export const refreshAC = () => ({ type: REFRESH });
export const clearDataAC = () => ({ type: CLEAR_DATA });

export const getTicketTC = () => {
  return (dispatch) => {
    request("/ticket", "post").then((res) => {
      dispatch(setTicketAC(res.obj));
    });
  };
};
export const getOwnersInfoTC = () => {
  return (dispatch) => {
    request("/ticket/owner", "get").then((response) => {
      dispatch(clearDataAC());
      response.obj.map((item, index) => {
        return dispatch(
          setDataAC({
            user_id: item.user_id,
            name: item.user_name,
            ownName: item.code,
            numberOfDivaces: item.expiration_date,
            icons: true,
            status: item.active,
            closeButton: true,

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

export const getOwnersMoreInfoTC = () => {
  return (dispatch) => {
    request("/ticket/owner", "get").then((response) => {
      dispatch(clearDataAC());
      response.obj.map((item, index) => {
        return dispatch(
          setDataAC({
            user_id: item.user_id,
            name: item.user_name,
            ownName: item.code,
            numberOfDivaces: item.expiration_date,
            icons: true,
            status: item.active,
            closeButton: true,
            settings: [
              {
                text: "ավելացնել սարք",
                oncl: "nav",
              },
            ],
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

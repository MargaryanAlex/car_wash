const CLEAR_DATA = "CLEAR_DATA";
const SET_DATA = "SET_DATA";
const REFRESH = "REFRESH";
const notificationState = {
  data: [
    {
      creation_date: "",
      device_code: "",
      id: "",
      msg: "",
    },
  ],
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
        data: [
          {
            creation_date: "",
            device_code: "",
            id: "",
            msg: "",
          },
        ],
      };
    case REFRESH:
      return {
        ...state,
        refresh: state.refresh + 1,
      };
  }
};

const setDataAC = (data) => ({ type: SET_DATA, data });
const clearDataAC = () => ({ type: CLEAR_DATA });
const refreshAC = () => ({ type: REFRESH });

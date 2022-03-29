import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import authorizationReducer from "../reducers/AuthorizationReducer";
import usersReducer from "../reducers/UsersReducer";
import ownerReducer from "../reducers/DevicesReducer";
import deivcesReducer from "../reducers/DevicesReducer";
import notificationReducer from "../reducers/NotificationReducer";
const reducers = combineReducers({
  authorization: authorizationReducer,
  users: usersReducer,
  owners: ownerReducer,
  devices: deivcesReducer,
  notifications: notificationReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;

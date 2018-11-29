import reducer from "./Reducers";
import { combineReducers } from "redux";

const initialState = {
    username: "Jane"
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        username: action.user
      };
    default:
      return state;
  }
};

const reducers = combineReducers(reducer, userReducer);

export default reducers;

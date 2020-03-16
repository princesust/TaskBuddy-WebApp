import createReducer from "../utils/createReducer";
import * as types from "../actions/types";

const initialState = {
  data: [],
  loading: false,
  error: null
};

export const userReducer = createReducer(initialState, {
  [types.FETCH_USERS_REQUEST](state) {
    return {
      ...state,
      loading: true
    };
  },

  [types.FETCH_USERS_SUCCESS](state, action) {
    return {
      ...state,
      loading: false,
      data: action.data,
      error: null
    };
  },
  [types.FETCH_USERS_FAILED](state, action) {
    return {
      ...state,
      loading: false,
      data: [],
      error: action.error
    };
  },
  [types.UPDATE_USERS](state, action) {
    console.log("update users");
    console.log(action);
    return {
      ...state,
      loading: false,
      data: state.data.map(item =>
        item._id === action.data._id ? action.data : item
      )
    };
  }
});

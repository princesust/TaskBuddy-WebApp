import * as types from "./types";
import { urls } from "../config";

export function fetchUser() {
  return {
    type: types.FETCH_USERS_REQUEST
  };
}

export function fetchUserSuccess(data) {
  return {
    type: types.FETCH_USERS_SUCCESS,
    data
  };
}

export function fetchUserFailed(error) {
  return {
    type: types.FETCH_USERS_FAILED,
    error
  };
}

export function updateUser(data) {
  return {
    type: types.UPDATE_USERS,
    data
  };
}

export function fetchUserThunk() {
  return async (dispatch, getState) => {
    dispatch({ type: types.FETCH_USERS_REQUEST });

    let response;
    try {
      response = await fetch(`${urls.SERVER}/api/user`);
      response = await response.json();
      dispatch({ type: types.FETCH_USERS_SUCCESS, data: response.data });
    } catch (error) {
      dispatch({ type: types.FETCH_USERS_FAILED, error });
    }
  };
}

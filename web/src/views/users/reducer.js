import * as types from './actionTypes';

export const defaultState = {
  isLoading: false,
  data: {},
  error: null,
  currentUser: {}
};

const users = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_USERS_START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };
    case types.GET_USERS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case types.SELECT_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user
      };
    default:
      return state;
  }
};

export default users;

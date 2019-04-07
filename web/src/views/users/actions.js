import { normalize } from 'normalizr';
import axios from '../../api';
import * as types from './actionTypes';
import { usersSchema } from '../../schema';

const getUsersStart = () => ({
  type: types.GET_USERS_START
});
const getUsersSuccess = data => ({
  type: types.GET_USERS_SUCCESS,
  data
});
const getUsersError = error => ({
  type: types.GET_USERS_ERROR,
  error
});

export const selectCurrentUser = user => ({
  type: types.SELECT_CURRENT_USER,
  user
});

export const getUsers = () => async dispatch => {
  dispatch(getUsersStart());

  try {
    const response = await axios().get('/users');

    const {
      entities: { users }
    } = normalize(response.data, [usersSchema]);

    return dispatch(getUsersSuccess(users));
  } catch (e) {
    const error = {
      message: e.message,
      stack: {},
      err: JSON.stringify(e)
    };
    return dispatch(getUsersError(error));
  }
};

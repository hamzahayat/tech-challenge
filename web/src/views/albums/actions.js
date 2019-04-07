import { normalize } from 'normalizr';
import axios from '../../api';
import * as types from './actionTypes';
import { albumsSchema } from '../../schema';

const getAlbumsStart = () => ({
  type: types.GET_ALBUMS_START
});
const getAlbumsSuccess = data => ({
  type: types.GET_ALBUMS_SUCCESS,
  data
});
const getAlbumsError = error => ({
  type: types.GET_ALBUMS_ERROR,
  error
});

export const selectCurrentAlbum = album => ({
  type: types.SELECT_CURRENT_ALBUM,
  album
});

export const getAlbums = () => async (dispatch, getState) => {
  dispatch(getAlbumsStart());

  try {
    const {
      users: {
        currentUser: { id }
      }
    } = getState();

    const response = await axios().get(`/albums?userId=${id}`);

    const {
      entities: { albums }
    } = normalize(response.data, [albumsSchema]);

    return dispatch(getAlbumsSuccess(albums));
  } catch (e) {
    const error = {
      message: e.message,
      stack: {},
      err: JSON.stringify(e)
    };
    return dispatch(getAlbumsError(error));
  }
};

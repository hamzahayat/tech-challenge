import { normalize } from 'normalizr';
import axios from '../../api';
import * as types from './actionTypes';
import { photoschema } from '../../schema';

const getPhotosStart = () => ({
  type: types.GET_PHOTOS_START
});
const getPhotosSuccess = data => ({
  type: types.GET_PHOTOS_SUCCESS,
  data
});
const getPhotosError = error => ({
  type: types.GET_PHOTOS_ERROR,
  error
});

export const getPhotos = () => async (dispatch, getState) => {
  dispatch(getPhotosStart());

  try {
    const {
      albums: {
        currentAlbum: { id }
      }
    } = getState();

    const response = await axios().get(`/photos?albumId=${id}`);

    const {
      entities: { photos }
    } = normalize(response.data, [photoschema]);

    return dispatch(getPhotosSuccess(photos));
  } catch (e) {
    const error = {
      message: e.message,
      stack: {},
      err: JSON.stringify(e)
    };
    return dispatch(getPhotosError(error));
  }
};

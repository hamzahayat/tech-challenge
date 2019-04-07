import * as types from './actionTypes';

export const defaultState = {
  isLoading: false,
  data: {},
  error: null,
  currentAlbum: {}
};

const albums = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_ALBUMS_START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_ALBUMS_SUCCESS:
      return {
        ...defaultState,
        data: action.data
      };
    case types.GET_ALBUMS_ERROR:
      return {
        ...defaultState,
        error: action.error
      };
    case types.SELECT_CURRENT_ALBUM:
      return {
        ...state,
        currentAlbum: action.album
      };
    default:
      return state;
  }
};

export default albums;

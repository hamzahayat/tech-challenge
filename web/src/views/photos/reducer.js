import * as types from './actionTypes';

export const defaultState = {
  isLoading: false,
  data: {},
  error: null
};

const photos = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_PHOTOS_START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_PHOTOS_SUCCESS:
      return {
        ...defaultState,
        data: action.data
      };
    case types.GET_PHOTOS_ERROR:
      return {
        ...defaultState,
        error: action.error
      };
    default:
      return state;
  }
};

export default photos;

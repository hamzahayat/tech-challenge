import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import { connectRouter } from 'connected-react-router';

// Import Reducers
import albums from '../views/albums/reducer';
import users from '../views/users/reducer';
import photos from '../views/photos/reducer';

// Export Reducers wirh history
const createReducer = history => combineReducers({
  router: connectRouter(history),
  browser: createResponsiveStateReducer({
    mobile: 768,
    tablet: 1024,
    desktop: 1130
  }),
  albums,
  users,
  photos
});

export default createReducer;

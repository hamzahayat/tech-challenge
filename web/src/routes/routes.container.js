import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Routes from './routes';

// Import Routes
import users from '../views/users/users.routes';
import albums from '../views/albums/albums.routes';
import photos from '../views/photos/photos.routes';

export const mapStateToProps = () => ({
  routes: [...users, ...albums, ...photos]
});

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Routes)
);

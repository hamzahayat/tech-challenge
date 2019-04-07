import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'connected-react-router';
import Albums from './albums';
import { getAlbums, selectCurrentAlbum } from './actions';

export const mapStateToProps = ({ browser, albums: { data, isLoading, error } }) => ({
  isMobile: browser.is.mobile,
  albums: data,
  arrayOfIds: Object.keys(data),
  isLoading,
  error
});

const mapDispatchToProps = {
  getAlbums,
  selectCurrentAlbum,
  push
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Albums)
);

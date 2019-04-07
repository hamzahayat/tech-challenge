import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'connected-react-router';
import Photos from './photos';
import { getPhotos } from './actions';
import { formatPhotos } from '../../services';

export const mapStateToProps = ({ browser, photos: { data, isLoading, error } }) => ({
  isMobile: browser.is.mobile,
  photos: formatPhotos(data),
  isLoading,
  error
});

const mapDispatchToProps = {
  getPhotos,
  push
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Photos)
);

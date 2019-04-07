import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'connected-react-router';
import Users from './users';
import { selectCurrentUser, getUsers } from './actions';

export const mapStateToProps = ({
  browser, users: {
    data, isLoading, error, currentUser
  }
}) => ({
  isMobile: browser.is.mobile,
  isLoading,
  error,
  users: data,
  arrayOfIds: Object.keys(data),
  currentUser
});

const mapDispatchToProps = { selectCurrentUser, getUsers, push };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Users)
);

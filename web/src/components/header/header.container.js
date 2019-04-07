import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'connected-react-router';
import Header from './header';

export const mapStateToProps = () => ({});

const mapDispatchToProps = {
  push,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Header),
);

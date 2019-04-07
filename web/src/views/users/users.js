import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  FilledInput,
  Card,
  Button
} from '@material-ui/core';
import { Loader } from '../../components';

import styles from './users.module.scss';
import { ROUTES } from '../../constants/general';

class Users extends Component {
  state = {};

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  handleLogin = () => {
    const { push } = this.props;
    push(ROUTES.ALBUMS);
  };

  handleSelectedUser = event => {
    const {
      target: { value }
    } = event;
    const { selectCurrentUser, users } = this.props;

    selectCurrentUser(users[value]);
  };

  renderUsers = () => {
    const { users, arrayOfIds } = this.props;
    return arrayOfIds.map(id => (
      <MenuItem key={id} value={id}>
        {users[id].name}
      </MenuItem>
    ));
  };

  render() {
    const { isMobile, isLoading, currentUser } = this.props;

    const containerClassName = classNames({
      [styles.container]: true,
      [styles['mobile-container']]: isMobile
    });

    if (isLoading) return <Loader />;

    return (
      <div className={styles.home}>
        <div className={containerClassName}>
          <Card className={styles.card}>
            <h1 className={styles.title}>Select A User</h1>

            <FormControl variant="filled" className={styles.form}>
              <InputLabel htmlFor="users">Users</InputLabel>
              <Select
                value={currentUser.id || 0}
                onChange={this.handleSelectedUser}
                input={<FilledInput name="age" id="users" />}
              >
                {this.renderUsers()}
              </Select>
            </FormControl>

            <Button
              variant="contained"
              className={styles.button}
              onClick={this.handleLogin}
              disabled={!currentUser.id}
            >
              Get started
            </Button>
          </Card>
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  arrayOfIds: PropTypes.array,
  // error: PropTypes.object,
  currentUser: PropTypes.object,
  isLoading: PropTypes.bool,
  isMobile: PropTypes.bool,
  selectCurrentUser: PropTypes.func,
  getUsers: PropTypes.func,
  users: PropTypes.object,
  push: PropTypes.func
};

Users.displayName = 'Users';

export default Users;

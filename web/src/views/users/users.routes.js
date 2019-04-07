import Users from './users.container';
import { ROUTES } from '../../constants/general';

export default [
  {
    name: 'users',
    path: ROUTES.USERS,
    isSecure: false,
    component: Users
  }
];

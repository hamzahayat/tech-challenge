import Albums from './albums.container';
import { ROUTES } from '../../constants/general';

export default [
  {
    name: 'albums',
    path: ROUTES.ALBUMS,
    isSecure: false,
    component: Albums
  }
];

import Photos from './photos.container';
import { ROUTES } from '../../constants/general';

export default [
  {
    name: 'photos',
    path: ROUTES.PHOTOS,
    isSecure: false,
    component: Photos
  }
];

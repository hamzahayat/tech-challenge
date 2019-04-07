import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';
import { Card, Button } from '@material-ui/core';
import { Loader } from '../../components';
import { ROUTES } from '../../constants/general';

import styles from './photos.module.scss';

class Photos extends Component {
  componentDidMount() {
    const { getPhotos } = this.props;
    getPhotos();
  }

  handleNoAlbum = () => {
    const { push } = this.props;
    push(ROUTES.ALBUMS);
  };

  render() {
    const { isLoading, photos } = this.props;

    if (isLoading) return <Loader />;

    if (!photos.length) {
      return (
        <Card className={styles.card}>
          <p className={styles.text}>Please select an album first</p>
          <Button className={styles.button} onClick={this.handleNoAlbum}>
            Select Album
          </Button>
        </Card>
      );
    }

    return <Gallery photos={photos} />;
  }
}

Photos.displayName = 'Photos';

Photos.propTypes = {
  photos: PropTypes.object,
  // error: PropTypes.any,
  isLoading: PropTypes.bool,
  getPhotos: PropTypes.func,
  push: PropTypes.func
};

export default Photos;

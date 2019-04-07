import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardActions, Button
} from '@material-ui/core';

import styles from '../../albums.module.scss';

const AlbumItem = ({ album, onAlbumSelect }) => {
  const handleSelect = () => {
    onAlbumSelect(album.id);
  };

  return (
    <Card className={styles.card}>
      <CardContent>
        <span>
          <h1 className={styles.label}>Title: </h1>
          <p className={styles.value}>{album.title}</p>
        </span>
      </CardContent>
      <CardActions>
        <Button size="small" className={styles.button} onClick={handleSelect}>
          Show photos
        </Button>
      </CardActions>
    </Card>
  );
};

AlbumItem.displayName = 'AlbumItem';

AlbumItem.propTypes = {
  album: PropTypes.object,
  onAlbumSelect: PropTypes.func
};

export default AlbumItem;

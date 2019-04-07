import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Loader } from '../../components';
import AlbumItem from './components/albumItem/albumItem';
import styles from './albums.module.scss';
import { ROUTES } from '../../constants/general';

class Albums extends Component {
  componentDidMount() {
    const { getAlbums } = this.props;
    getAlbums();
  }

  handleAlbumSelect = id => {
    const { selectCurrentAlbum, albums, push } = this.props;
    selectCurrentAlbum(albums[id]);
    push(ROUTES.PHOTOS);
  };

  renderAlbums = () => {
    const { albums } = this.props;
    const arrayOfIds = Object.keys(albums);

    return arrayOfIds.map(id => (
      <AlbumItem key={id} album={albums[id]} onAlbumSelect={this.handleAlbumSelect} />
    ));
  };

  render() {
    const { isMobile, isLoading } = this.props;

    const containerClassName = classNames({
      [styles.container]: true,
      [styles['mobile-container']]: isMobile
    });

    if (isLoading) return <Loader />;

    return (
      <div className={styles.albums}>
        <div className={containerClassName}>{this.renderAlbums()}</div>
      </div>
    );
  }
}

Albums.displayName = 'Albums';

Albums.propTypes = {
  albums: PropTypes.object,
  // error: PropTypes.any,
  isLoading: PropTypes.bool,
  isMobile: PropTypes.bool,
  getAlbums: PropTypes.func,
  selectCurrentAlbum: PropTypes.func,
  push: PropTypes.func
};

export default Albums;

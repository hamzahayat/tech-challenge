export const formatPhotos = photos => {
  if (!photos) return [];
  const arrayOfIds = Object.keys(photos);

  return arrayOfIds.map(id => ({
    id,
    src: photos[id].url,
    height: 1,
    width: 1
  }));
};

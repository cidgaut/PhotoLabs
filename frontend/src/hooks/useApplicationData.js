import { useState, useEffect } from 'react';

//initial states
const useApplicationData = () => {
  const [state, setState] = useState({
    photos: [],
    favoritePhotos: [], 
    selectedPhoto: null, 
    modalOpen: false, 
  });

  

  const updateToFavPhotoIds = (photoId) => {
    setState((prev) => ({
      ...prev,
      favoritePhotos: prev.favoritePhotos.includes(photoId)
        ? prev.favoritePhotos.filter((id) => id !== photoId)
        : [...prev.favoritePhotos, photoId],
    }));
  };

  const setPhotoSelected = (photo) => {
    setState((prev) => ({ ...prev, selectedPhoto: photo }));
  };

  const onClosePhotoDetailsModal = () => {
    setState((prev) => ({ ...prev, modalOpen: false }));
  };

  

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
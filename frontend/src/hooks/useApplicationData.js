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
    // i named my variables differently and I'm not sure what to put in here
  };

  const setPhotoSelected = (photo) => {
    // i named my variables differently and I'm not sure what to put in here
  };

  const onClosePhotoDetailsModal = () => {
    // i named my variables differently and I'm not sure what to put in here
  };

  

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
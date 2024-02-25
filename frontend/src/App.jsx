import React, { useState } from 'react';

//styling
import './App.scss';

//components
import HomeRoute from 'routes/HomeRoute';
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">

    {/* Passing props to home route */}
      <HomeRoute
        topics={topics}
        photos={photos}
        setModal={setPhotoSelected}
        modal={state.modalOpen}
        favoritePhotos={state.favoritePhotos}
        setFavoritePhotos={updateToFavPhotoIds}
      />

      {/* PhotoDetailsModal if modal is true */}
      {modal && (
      <PhotoDetailsModal
        selectedPhoto={state.selectedPhoto}
        setModal={onClosePhotoDetailsModal}
        modal={state.modalOpen}
        favoritePhotos={state.favoritePhotos}
        setFavoritePhotos={updateToFavPhotoIds}
      />
      )}
    </div>
  );
};

export default App;

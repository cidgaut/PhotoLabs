import React, { useState } from 'react';

//styling
import './App.scss';

//components
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getPhotosByTopic,
  } = useApplicationData();

  return (
    <div className="App">

    {/* Passing props to home route */}
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        setModal={setPhotoSelected}
        modal={state.modalOpen}
        //my modal is not opening with the onClick event
        favoritePhotos={state.favoritePhotos}
        setFavoritePhotos={updateToFavPhotoIds}
      />

      {/* PhotoDetailsModal if modal is true */}
      {state.modalOpen && (
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

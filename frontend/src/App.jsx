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
    photoFavBtnClicked,
    showModal,
    closeModal,
  } = useApplicationData();

  console.log("get photos by topic:", getPhotosByTopic)

  return (
    <div className="App">

    {/* Passing props to home route */}
      <HomeRoute
        state={state}
        topics={state.topicData}
        photos={state.photoData}
        //setModal={setPhotoSelected}
        //setPhotoSelected={setPhotoSelected}
        //modal={state.modalOpen}
        //my modal is not opening with the onClick event
        //favoritePhotos={state.favoritePhotos}
        //setFavoritePhotos={updateToFavPhotoIds}
        getPhotosByTopic={getPhotosByTopic}
        //setFavPhotos={updateToFavPhotoIds}
        photoFavBtnClicked={photoFavBtnClicked}
        showModal={showModal}
      />

      {/* PhotoDetailsModal if modal is true */}
      {state.modalOpen && (
      <PhotoDetailsModal
        selectedPhoto={state.selectedPhoto}
        setModal={onClosePhotoDetailsModal}
        modal={state.modalOpen}
        favPhotos={state.favoritePhotos}
        setFavPhotos={updateToFavPhotoIds}
        photoFavBtnClicked={photoFavBtnClicked}
        closeModal={closeModal}
      />
      )}
    </div>
  );
};

export default App;

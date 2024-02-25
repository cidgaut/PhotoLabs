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

  const [modal, setModal] = useState(false);

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  //added this line for global favourites
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const toggleFavorite = (photoId) => {
    setFavoritePhotos((prevFavorites) =>
      prevFavorites.includes(photoId)
        ? prevFavorites.filter((id) => id !== photoId)
        : [...prevFavorites, photoId]
    );
  };

  // Function to open modal with photo details
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedPhoto(null);
    setModal(false);
  };

  return (
    <div className="App">

    {/* Passing props to home route */}
      <HomeRoute
        topics={topics}
        photos={photos}
        setModal={openModal}
        modal={modal}
        favoritePhotos={favoritePhotos}
        setFavoritePhotos={setFavoritePhotos}
      />

      {/* PhotoDetailsModal if modal is true */}
      {modal && (
      <PhotoDetailsModal
        selectedPhoto={selectedPhoto}
        setModal={closeModal}
        modal={modal}
        favoritePhotos={favoritePhotos}
        setFavoritePhotos={setFavoritePhotos}
        toggleFavorite={toggleFavorite}
      />
      )}
    </div>
  );
};

export default App;

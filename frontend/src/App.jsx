import React, { useState } from 'react';

//styling
import './App.scss';

//components
import HomeRoute from 'routes/HomeRoute';
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [modal, setModal] = useState(false);

  const [selectedPhoto, setSelectedPhoto] = useState(null);

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
      />

      {/* PhotoDetailsModal if modal is true */}
      {modal && (
      <PhotoDetailsModal
        selectedPhoto={selectedPhoto}
        setModal={closeModal}
        modal={modal}
      />
      )}
    </div>
  );
};

export default App;

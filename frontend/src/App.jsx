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

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="App">

      <HomeRoute topics={topics} photos={photos}
      setModal={setModal}
      setSelectedPhoto={setSelectedPhoto}/>
      {modal && <PhotoDetailsModal modal={selectedPhoto} setmodal={setModal} />}
      <button onClick={toggleModal}>Toggle Modal</button>

    </div>
  );
};

export default App;

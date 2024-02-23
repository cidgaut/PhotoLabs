import React, {useCallback, useState } from 'react';

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

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="App">
      {/*photos.map((photo, index) =>
      <PhotoListItem key={index} photo={photo}/>
  )*/}
      <HomeRoute topics={topics} photos={photos}
      setModal={setModal}
      modal={setModal}/>
      {modal && <PhotoDetailsModal setModal={setModal}
      modal={modal} />}
      <button onClick={toggleModal}>Toggle Modal</button>
    </div>
  );
};

export default App;

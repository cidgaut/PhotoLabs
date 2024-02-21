import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = [sampleDataForPhotoListItem1, sampleDataForPhotoListItem2, sampleDataForPhotoListItem3];
  return (
    <div className="App">
      {/*photos.map((photo, index) =>
      <PhotoListItem key={index} photo={photo}/>
  )*/}
    </div>
  );
};

export default App;

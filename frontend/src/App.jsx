import React from 'react';

//styling
import './App.scss';

//components
import HomeRoute from 'routes/HomeRoute';
import topics from "./mocks/topics";
import photos from "./mocks/photos";


// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      {/*photos.map((photo, index) =>
      <PhotoListItem key={index} photo={photo}/>
  )*/}
      <HomeRoute topics={topics} photos={photos}/>
    </div>
  );
};

export default App;

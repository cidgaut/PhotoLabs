import React from 'react';

//styling
import './App.scss';

//components
import HomeRoute from 'routes/HomeRoute';


// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      {/*photos.map((photo, index) =>
      <PhotoListItem key={index} photo={photo}/>
  )*/}
      <HomeRoute />
    </div>
  );
};

export default App;

import React from 'react';

//styling
import './App.scss';

//components
import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';


// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      {/*photos.map((photo, index) =>
      <PhotoListItem key={index} photo={photo}/>
  )*/}
      <TopNavigation />
     
      <PhotoList />
    </div>
  );
};

export default App;

import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute=({topics, favoritePhotos, getPhotosByTopic, photos, setPhotoSelected, setModal, toggleFavorite })=> {
  
  // const [favoritePhotos, setFavoritePhotos] = useState([]);
// 
  // {/* for some reason I can't get this to go into global data, I'm trying to this to work with modal */}
  // const toggleFavorite = (photoId) => {
    // setFavoritePhotos((prevFavorites) =>
      // prevFavorites.includes(photoId)
        // ? prevFavorites.filter((id) => id !== photoId)
        // : [...prevFavorites, photoId]
    // );
  // };
 
  return (
    <div className="home-route">
      <TopNavigation
      topics={topics}
      favoriteCount={favoritePhotos.length} getPhotosByTopic={getPhotosByTopic}/>
      <PhotoList photos={photos} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos} setModal={setModal}
      setPhotoSelected={setPhotoSelected}/>
    </div>
  );
};

export default HomeRoute;

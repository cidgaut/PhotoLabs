import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute=({topics, favoritePhotos, getPhotosByTopic, photos, setPhotoSelected, setModal, toggleFavorite })=> {
 
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

import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  {/* for some reason I can't get this to go into global data, I'm trying to this to work with modal */}
  const toggleFavorite = (photoId) => {
    setFavoritePhotos((prevFavorites) =>
      prevFavorites.includes(photoId)
        ? prevFavorites.filter((id) => id !== photoId)
        : [...prevFavorites, photoId]
    );
  };

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favoriteCount={favoritePhotos.length}/>
      <PhotoList photos={props.photos} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos} setModal={props.setModal}/>
    </div>
  );
};

export default HomeRoute;

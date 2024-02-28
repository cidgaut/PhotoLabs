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
  console.log("getPhotosbytopic homeroute", props.getPhotosByTopic);
  return (
    <div className="home-route">
      <TopNavigation
      topics={props.topics}
      favoriteCount={favoritePhotos.length} getPhotosByTopic={props.getPhotosByTopic}/>
      <PhotoList photos={props.photos} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos} setModal={props.setModal}
      setPhotoSelected={props.setPhotoSelected}/>
    </div>
  );
};

export default HomeRoute;

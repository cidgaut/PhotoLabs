import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  //const [favoritePhotos, setFavoritePhotos] = useState([]);

  const {
    state,
    photoFavBtnClicked,
    showModal,
    getPhotosByTopic,
    topics,
    photos,
  } = props;

  // const toggleFavorite = (photoId) => {
  //   setFavoritePhotos((prevFavorites) =>
  //     prevFavorites.includes(photoId)
  //       ? prevFavorites.filter((id) => id !== photoId)
  //       : [...prevFavorites, photoId]
  //   );
  // };
  
  return (
    <div className="home-route">
      <TopNavigation
      topics={topics}
      favPhotoList={state.favoritePhotos}
      //favoriteCount={favoritePhotos.length}
      getPhotosByTopic={getPhotosByTopic}
      />
      <PhotoList
      photos={photos}
      //toggleFavorite={toggleFavorite}
      //setFavPhotos={props.setFavPhotos}
      //favoritePhotos={favoritePhotos}
      //setModal={props.setModal}
      //setPhotoSelected={props.setPhotoSelected}
      photoFavBtnClicked={photoFavBtnClicked}
      showModal={showModal}
      favPhotoList={state.favoritePhotos}
      />
    </div>
  );
};

export default HomeRoute;

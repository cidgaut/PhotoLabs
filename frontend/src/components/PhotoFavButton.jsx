import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ toggleFavorite, isFavorite}) {


  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}>
      <div className="photo-list__fav-icon-svg">
        {<FavIcon selected={isFavorite} />}
      </div>
    </div>
  );
}

export default PhotoFavButton;
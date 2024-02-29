import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ toggleFavorite, isFavorite}) {
  const handleClick = (event) => {
    event.stopPropagation();
    toggleFavorite();
  }


  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {<FavIcon selected={isFavorite} />}
      </div>
    </div>
  );
}

export default PhotoFavButton;
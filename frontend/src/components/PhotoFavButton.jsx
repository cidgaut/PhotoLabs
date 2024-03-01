import React, { useState, useCallback } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ toggleFavorite, isFavorite, photoIsFavorited, id}) {
  // const handleClick = (event, photo) => {
  //   event.stopPropagation();
  //   toggleFavorite();
  // }

  const handleClick = useCallback(() => {
    photoIsFavorited(id)
  })


  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {<FavIcon selected={isFavorite} />}
      </div>
    </div>
  );
}

export default PhotoFavButton;
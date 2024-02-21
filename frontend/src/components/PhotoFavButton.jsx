import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favorited, setFavorited] = useState(false);

  const toggleFavorite = () => {
    setFavorited(favorited => !favorited);
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}>
      <div className="photo-list__fav-icon-svg">
        {<FavIcon selected={favorited} />}
      </div>
    </div>
  );
}

export default PhotoFavButton;
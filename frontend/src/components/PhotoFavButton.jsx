import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favouritePhoto, setFavouritePhoto] = useState(false);
  
  return (
    <div className="photo-list__fav-icon" onClick={() => setFavouritePhoto(prev => !prev)}>
      <div className="photo-list__fav-icon-svg">
        {<FavIcon isFavourite={favouritePhoto} />}
      </div>
    </div>
  );
}

export default PhotoFavButton;
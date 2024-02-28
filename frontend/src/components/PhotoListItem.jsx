import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { toggleFavorite, isFavorite, photo, setPhotoSelected } = props;

  const handleImageClick = () => {
    setPhotoSelected(photo)
  }

  return (
    <article className="photo-list__item">
      <PhotoFavButton toggleFavorite={toggleFavorite} isFavorite={isFavorite}/>
      <img onClick={handleImageClick} src={photo.urls.regular} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={photo.user.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
          <p>{photo.user.name}</p>
        </div>
      </div>
    </article>
 );
};

export default PhotoListItem;

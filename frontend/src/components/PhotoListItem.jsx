import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { toggleFavorite, isFavorite } = props;

  return (
    <article className="photo-list__item">
      <PhotoFavButton onClick={toggleFavorite} isFavorite={isFavorite}/>
      <img onClick={props.setModal} src={props.photo.urls.regular} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={props.photo.user.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</p>
          <p>{props.photo.user.name}</p>
        </div>
      </div>
    </article>
 );
};

export default PhotoListItem;

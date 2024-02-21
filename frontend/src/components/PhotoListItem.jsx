import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props.photo;
  return (
    <article className="photo-list__item">
      <PhotoFavButton />
      <img src={imageSource} alt={`Photo by ${username}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt={`Profile of ${username}`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
          <p>{username}</p>
        </div>
      </div>
    </article>
 );
};

export default PhotoListItem;

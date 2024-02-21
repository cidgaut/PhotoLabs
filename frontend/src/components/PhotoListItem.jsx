import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = ({ photo }) => {
  const { id, location, imageSource, username, profile } = photo;
  return (
    <article className="photo-list__item">
    <img src={imageSource} alt={`Photo by ${username}`} className="photo-list__image" />
      <div className="photo-list__user-profile">
        <img src={profile} alt={`Profile of ${username}`} className="photo-list__user-profile" />
        <p className="photo-list__user-location">{location.city}, {location.country}</p>
        <p className="photo-list__user-info">{username}</p>
      </div>
    </article>
 );
};

export default PhotoListItem;

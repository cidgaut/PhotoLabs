import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <article className="photo-list-item">
    <img src={imageSource} alt={`Photo by ${username}`} className="photo-img" />
      <div className="photo-details">
        <img src={profile} alt={`Profile of ${username}`} className="profile-img" />
        <p className="photo-location">{location.city}, {location.country}</p>
        <p className="photo-username">{username}</p>
      </div>
    </article>
 );
};

export default PhotoListItem;

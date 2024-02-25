import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {

  const { photos, toggleFavorite, favoritePhotos}= props;


  const photoItems = props.photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      photo={photo}
      toggleFavorite={() => toggleFavorite(photo.id)}
          isFavorite={(favoritePhotos || []).includes(photo.id)}
          setModal={props.setModal}
          photos={photos}
    />
  ));
  
  return (
    <ul className="photo-list">
      {photoItems}
    </ul>
  );
};

export default PhotoList;

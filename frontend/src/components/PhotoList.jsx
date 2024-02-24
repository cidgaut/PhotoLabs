import React, { useState } from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos";


const PhotoList = (props) => {

  const { photos, toggleFavorite, favoritePhotos}= props;
  const [selectedPhoto, setSelectedPhoto] =useState(null);


  const photoItems = props.photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      photo={photo}
      toggleFavorite={() => toggleFavorite(photo.id)}
          isFavorite={favoritePhotos.includes(photo.id)}
          setModal={props.setModal}
          setSelectedPhoto={setSelectedPhoto}
    />
  ));
  
  return (
    <ul className="photo-list">
      {photoItems}
    </ul>
  );
};

export default PhotoList;

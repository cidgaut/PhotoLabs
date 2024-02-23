import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos";


const PhotoList = () => {


  const photoItems = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      photo={photo}
    />
  ));
  
  return (
    <ul className="photo-list">
      {photoItems}
    </ul>
  );
};

export default PhotoList;

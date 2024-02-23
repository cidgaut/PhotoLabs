import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos";


const PhotoList = (props) => {


  const photoItems = props.photos.map((photos) => (
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

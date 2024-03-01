import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  // <PhotoList
  //     photos={photos}
  //     //toggleFavorite={toggleFavorite}
  //     //setFavPhotos={props.setFavPhotos}
  //     //favoritePhotos={favoritePhotos}
  //     //setModal={props.setModal}
  //     //setPhotoSelected={props.setPhotoSelected}
  //     photoFavBtnClicked={photoFavBtnClicked}
  //     showModal={showModal}
  //     favPhotoList={state.favoritePhotos}
  //     />

  //const { photos, toggleFavorite, favoritePhotos, setPhotoSelected }= props;
  const { photoFavBtnClicked, photos, showModal, favPhotoList }= props;
  console.log(photos);


  const photoItems = photos.map((photo) => {
    const { id, user, urls, location } = photo;
    // <PhotoListItem
    //   key={photo.id}
    //   photo={photo}
    //   toggleFavorite={() => toggleFavorite(photo.id)}
    //       isFavorite={(favoritePhotos || []).includes(photo.id)}
    //       setModal={props.setModal}
    //       photos={photos}
    //       setPhotoSelected={setPhotoSelected}
    //       setFavPhotos={props.setFavPhotos}
    // />

    <PhotoListItem
        key={id}
        id={id}
        user={user}
        location={location}
        urls={urls}
        showModal={showModal}
        favPhotoList={favPhotoList}
        photoFavBtnClicked={photoFavBtnClicked}
        photo={photo}
      />


});
  
  return (
    <ul className="photo-list">
      {photoItems}
    </ul>
  );
};

export default PhotoList;

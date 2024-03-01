import React, { useMemo } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  //const { toggleFavorite, isFavorite, photo, setPhotoSelected } = props;
  const {
    id,
    user,
    urls,
    location,
    favPhotoList,
    photoFavBtnClicked,
    showModal,
  } = props;

  const handleImageClick = () => {
    if (setPhotoSelected) {
      setPhotoSelected(photo)
    }
  }

  // <PhotoFavButton
  //         isFavorite={setFavPhotos}
  //         id={id}
  //         photoIsFavorited={setFavPhotos}
  //       />

  const photoIsFavorited = useMemo(() => {
    if (favPhotoList.includes(id)) return true
    return false
  }, [favPhotoList, id]);
  
  return (
    <article className="photo-list__item">
      {/* <PhotoFavButton id={photo.id} toggleFavorite={toggleFavorite} isFavorite={isFavorite}/> */}

      {/* <PhotoFavButton id={photo.id} photoIsFavorited={props.setFavPhotos} isFavorite={isFavorite}/> */}

      <PhotoFavButton
          id={id}
          user={user}
          favPhotoList={favPhotoList}
          photoFavBtnClicked={photoFavBtnClicked}
          photoIsFavorited={photoIsFavorited}
        />


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

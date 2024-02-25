import React, { useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { setModal, selectedPhoto, toggleFavorite, isFavorite } = props;
  const similar_photosArray = Object.values(selectedPhoto.similar_photos || {});
  console.log("similar photos", similar_photosArray)

  useEffect(() => {
    //log photo details to console when selectedPhoto changes
    console.log("Selected Photo Details:", selectedPhoto);
  }, [selectedPhoto]);
  
  const toggleModal = () => {
    setModal((prevModal) => !prevModal);
  };

  return (
    <article className="photo-details-modal">
  
      <button onClick={toggleModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>
      <PhotoFavButton onClick={toggleFavorite} isFavorite={isFavorite}/>
        <img src={selectedPhoto.urls.full} className='photo-details-modal__image' />
        <div className="photo-details-modal__photographer-details">
          <img src={selectedPhoto.user.profile}  className="photo-details-modal__photographer-profile" />
          <div>
            <p className="photo-details-modal__photographer-info">{selectedPhoto.user.username}</p>
            <p className="photo-details-modal__photographer-location">{selectedPhoto.location.city}, {selectedPhoto.location.country}</p>
          </div>
        </div>
        <div className='photo-details-modal__header'>
          <h1>Similar Photos</h1>
        </div>
        <div className='photo-details-modal__images'>
          <PhotoList photos={similar_photosArray}  />
        </div>
      </div>
    
    </article>
  
  )
};

export default PhotoDetailsModal;

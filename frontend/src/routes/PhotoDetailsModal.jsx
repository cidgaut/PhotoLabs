import React, { useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { setModal, selectedPhoto } = props;

  useEffect(() => {
    //log photo details to console when selectedPhoto changes
    console.log("Selected Photo Details:", selectedPhoto);
  }, [selectedPhoto]);
  
  const toggleModal = () => {
    setModal((prevModal) => !prevModal);
  };

  return (
    <div className="photo-details-modal">
      <button onClick={toggleModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;

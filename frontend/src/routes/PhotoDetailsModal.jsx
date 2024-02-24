import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  console.log(props.selectedPhoto);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img onClick={toggleModal} src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;

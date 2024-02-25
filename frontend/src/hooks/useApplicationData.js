import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

  const reducer = function(state, action) {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        return {
          ...state,
          favoritePhotos: [...state.favoritePhotos, action.payload.id],
        };
      
      case ACTIONS.FAV_PHOTO_REMOVED:
        return {
          ...state,
          favoritePhotos: state.favoritePhotos.filter((id) => id !== action.payload.id),
        };
  
      case ACTIONS.SELECT_PHOTO:
        return {
          ...state,
          selectedPhoto: action.payload.photo,
        };
  
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return {
          ...state,
          modalOpen: action.payload.modalOpen,
        };

        case ACTIONS.SET_PHOTO_DATA:
      return {
          ...state,
          photoData: action.payload
        };

      case ACTIONS.SET_TOPIC_DATA:
        return {
          ...state,
          topicData: action.payload
        };

      default:
        throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
    }
  }

  const useApplicationData = () => {
    const initialState = {
      photos: [],
      favoritePhotos: [],
      selectedPhoto: null,
      modalOpen: false,
      photoData: [],
      topicData: [],
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

      fetch("/api/photos")
        .then((response) => response.json())
        .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  
      fetch("/api/topics")
        .then((response) => response.json())
        .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
    }, []);

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { modalOpen: false } });
  };

  

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
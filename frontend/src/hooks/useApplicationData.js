import { useReducer, useEffect } from 'react';

// Define different actions for the useReducer
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC'
};

  const reducer = function(state, action) {
    // Reducer function to handle different actions
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        // Logic for handling favoriting a photo
        return {
          ...state,
          favoritePhotos: [...state.favoritePhotos, action.payload.id],
        };
      
      case ACTIONS.FAV_PHOTO_REMOVED:
        // Logic for handling unfavorite a photo
        return {
          ...state,
          favoritePhotos: state.favoritePhotos.filter((id) => id !== action.payload.id),
        };
  
      case ACTIONS.SELECT_PHOTO:
        // Logic for selecting a photo
        return {
          ...state,
          selectedPhoto: action.payload.photo,
        };
  
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        // Logic for displaying photo details
        return {
          ...state,
          modalOpen: action.payload.modalOpen,
        };

        case ACTIONS.SET_PHOTO_DATA:
          // Logic for setting photo data
      return {
          ...state,
          photoData: action.payload
        };

      case ACTIONS.SET_TOPIC_DATA:
        // Logic for setting topic data
        return {
          ...state,
          topicData: action.payload
        };

        case ACTIONS.GET_PHOTOS_BY_TOPIC:
          // Logic for getting photos by topic
          return {
            ...state,
            
          }

      default:
        throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
    }
  }

  const useApplicationData = () => {
    // Custom hook for managing application data and state
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
      // Fetch photo data and topic data on component mount
      Promise.all([
        fetch("/api/photos").then((response) => response.json()).catch(error => {
          console.error("Error fetching photo data:", error);
         
        }),
        fetch("/api/topics").then((response) => response.json()).catch(error => {
          console.error("Error fetching topic data:", error);
        })
      ])
      .then(([photoData, topicData]) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }, []);

  const updateToFavPhotoIds = (photoId) => {
    // Function to update favorite photos
  if (state.favoritePhotos.includes(photoId)) {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
  } else {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
  }
  };

  const setPhotoSelected = (photo) => {
    // Function to set selected photo and display photo details
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { modalOpen: true } });
  };

  const onClosePhotoDetailsModal = () => {
    // Function to close the photo details modal
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { modalOpen: false } });
  };

  const getPhotosByTopic = async (topicId) => {
    // Async function to fetch photos by topic
    try {
      const response = await fetch(`http://localhost:8001/api/topics/photos/${topicId}`);
      const data = await response.json();

      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
    } catch (error) {
      console.error('Error fetching photos by topic:', error);
    }
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getPhotosByTopic,
  };
};

export default useApplicationData;

//return to this
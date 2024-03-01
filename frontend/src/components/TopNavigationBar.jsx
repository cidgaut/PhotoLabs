import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';


const TopNavigation = (props) => {
  
  //const { favoriteCount, getPhotosByTopic, favPhotoList } = props;
  const { topics, favPhotoList, getPhotosByTopic } = props;
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic}
      favPhotoList={favPhotoList}/>
      {/* <FavBadge isFavPhotoExist={favoriteCount > 0}/> */}
    </div>
  )
}

export default TopNavigation;
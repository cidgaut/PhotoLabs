import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import FavBadge from "./FavBadge";


const TopicList = (props) => {

  const { topics, getPhotosByTopic, favPhotoList} = props;
  const topicItems = topics.map((topic) => (
    
    <TopicListItem
      key={topic.id}
      id={topic.id}
      topic={topic}
      slug={topic.slug}
      title={topic.title}
      getPhotosByTopic={getPhotosByTopic}
    />
  ));
  
  return (
    <div className="top-nav-bar__topic-list">
      {topicItems}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <FavBadge isFavPhotoExist={favPhotoList.length > 0 ? true : false} />
    </div>
  );
};

export default TopicList; 

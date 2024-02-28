import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {

  const { topics, getPhotosByTopic} = props;
  const topicItems = topics.map((topic) => (
    
    <TopicListItem
      key={topic.id}
      id={topic.id}
      topic={topic}
      slug={topic.slug}
      title={topic.title}
      getPhotosByTopic={props.getPhotosByTopic}
    />
  ));
  
  return (
    <div className="top-nav-bar__topic-list">
      {topicItems}
    </div>
  );
};

export default TopicList;

import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics";


const TopicList = () => {

  const topicItems = topics.map((topic) => (
    <TopicListItem
      key={topic.id}
      topic={topic}
    />
  ));
  
  return (
    <div className="top-nav-bar__topic-list">
      {topicItems}
    </div>
  );
};

export default TopicList;

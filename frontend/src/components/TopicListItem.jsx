import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  console.log("getPhotosbytopic topiclistitem",props.getPhotosByTopic);
  console.log("topicListItem props", props)
  return (
    <div className="topic-list__item" onClick={() => props.getPhotosByTopic(props.id)}>
      <span>{props.title}</span>
    </div>
  );
};

export default TopicListItem;

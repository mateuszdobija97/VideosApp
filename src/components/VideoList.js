import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVideosList = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));

  return <div className="ui relaxed divided list">{renderedVideosList}</div>;
};

export default VideoList;

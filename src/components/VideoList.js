import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const videoList = props.VideoList.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onSelect={props.onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{videoList}</div>;
};

export default VideoList;

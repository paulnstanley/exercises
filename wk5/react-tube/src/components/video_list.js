import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {
  const VideoListItems = props.videos.map((video, index) => {
    return (
    <VideoListItem key={index} video={video} updateSelectedVideo={props.updateSelectedVideo}/>
    )
  })

  return (
    <ul className="col-md-4 list-group">
      {VideoListItems}
    </ul>
  )
}

export default VideoList;

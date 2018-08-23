import React from "react";

const VideoListItem = (props) => {
  let video = props.video

  let clicker = function () {
    props.updateSelectedVideo(video)
  }

  return (
    <li>
      <div onClick={clicker}>
        <div>{video.snippet.title}</div>
        <img src={video.snippet.thumbnails.high.url}/>
      </div>
    </li>
  )
}

export default VideoListItem;

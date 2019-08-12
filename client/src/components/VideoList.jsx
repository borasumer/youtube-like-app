import React from 'react'
import VideoItem from './VideoItem';
import SearchBar from './SearchBar';


const VideoList = ({ videos, handleVideoSelect }) => {
  //console.log('Video List', videos)
  return (
    <div className="container mt-5">
      <SearchBar key={1} />
      <div className="row">
        {videos.map(video => {
          //console.log(video.id.videoId)
          return (
            <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
          )
        })}
      </div>
    </div>
  );
}

export default VideoList;
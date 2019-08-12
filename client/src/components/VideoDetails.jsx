import React from 'react';

const VideoDetails = ({ video }) => {
  console.log(video);

  if (!video) {
    return <div></div>
  } else {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div className="container mt-5">
        <div>
          <iframe style={{ width: '70vw', height: '60vh' }} src={videoSrc} allowFullScreen title='Video player' />
        </div>
        <div className='ui segment'>
          <h4 className='ui header'>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    )
  }

}

export default VideoDetails;
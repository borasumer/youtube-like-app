import React from 'react';
import styled from 'styled-components';

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <Wrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3 p-3">
      <div onClick={() => handleVideoSelect(video)} className="card">
        <div className="image-container">
          <img className="card-img-top" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p id="title" className="align-self-center mb-0">{video.snippet.title}</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default VideoItem;

const Wrapper = styled.div`
.card-img-top{
  object-fit:cover;
  width: 100%;
  height: 10vw;
}
.img-container {
    position: relative;
    overflow: hidden;
  }
#title{
  font-size:10px;
  white-space: nowrap;
  overflow: hidden;
}
`
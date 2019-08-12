import React, { useContext } from "react";
import { YoutubeContext } from '../contexts/YoutubeContext';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

function Home() {
  const { handleVideoSelect, videos, selectedVideo, searchTerm } = useContext(YoutubeContext);
  return (
    <div className='container mx-auto'>
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="col-md">
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos} searchTerm={searchTerm} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

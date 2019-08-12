import React, { useState, useEffect, createContext } from 'react'
// import youtube from '../components/youtube';
import axios from 'axios';



export const YoutubeContext = createContext();


const YoutubeContextProvider = (props) => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 8,
        key: 'AIzaSyAPO9rQnWrMkFRK8VRkwP9RR-kxnUktd_E',
        q: searchTerm
      }
    }, [searchTerm])
      .then(response => {
        response ? (setVideos(response.data.items)) : (console.log('there is no response'));
        setVideos(response.data.items);
      })
      .catch(err => console.log(err));
  }, [searchTerm]);

  //!SearchBar Func
  const handleChange = event => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };


  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  }
  return (
    <YoutubeContext.Provider value={{ handleChange, handleVideoSelect, videos, selectedVideo, searchTerm }}>
      {props.children}
    </YoutubeContext.Provider>
  );
}

export default YoutubeContextProvider;

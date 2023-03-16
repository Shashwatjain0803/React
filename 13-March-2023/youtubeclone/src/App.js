import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import VideosList from './VideosList';
import VideoPlayer from './VideoPlayer';
const API_KEY = "AIzaSyCaX0M-YyhQDHx8TYoWHhJ7TJcK2_e6iY8";
function App() {
  const [videosList, setVideosList] = useState(
    {
      videos: []
    }
  )

  useEffect(
    () => {
      console.log("use effect called")
      var API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCaX0M-YyhQDHx8TYoWHhJ7TJcK2_e6iY8&q=java&type=video&maxResults=5`;
      axios.get(API_URL).then(
        response => {
          console.log(response.data);
          setVideosList({
            videos: response.data.items
          });
        },
        error => {
          console.log(error);
        }
      )

    }, []
  )
  return (
    <div>
      <h1>I am in App</h1>
      <VideoPlayer></VideoPlayer>
      <VideosList videos={videosList.videos}></VideosList>
      
    </div>
  );
}
export default App;
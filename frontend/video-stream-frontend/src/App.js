import './App.css';
import { useState } from 'react';
import VideoPlayes from './components/VideoPlayer';

function App() {

  const [videoId, setVideoId] = useState(null)

  const playVideo = (e, videoId)=>{
    e.preventDefault();
    setVideoId(videoId)
  }
  return (
    <div className="App">
      {videoId && <VideoPlayes videoId={videoId}/>}<br />
      <button onClick={(e)=>{playVideo(e, 'video1')}}>Play Video 1</button>
      <button onClick={(e)=>{playVideo(e, 'video2')}}>Play Video 2</button>
      <button onClick={(e)=>{playVideo(e, 'video3')}}>Play Video 3</button>
    </div>
  );
}

export default App;

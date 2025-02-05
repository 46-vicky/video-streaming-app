import React, {useRef, useEffect} from 'react'

const VideoPlayes = ({videoId}) => {
    const videoRef = useRef(null)

    useEffect(()=>{
        if(videoRef.current){
            videoRef.current.pause()
            videoRef.current.removeAttribute('src')
            videoRef.current.load()
        }
    },[videoId])
  return (
    <video ref={videoRef} width='1000' height='600' controls autoPlay>
        <source src={`http://localhost:3000/videos/${videoId}`} type='video/mp4'></source>
        Your Browser Doest not Support the Video Tag
    </video>
  )
}

export default VideoPlayes
import React from 'react'
import VideoPlayer from "react-video-js-player";

const Video = () => {

 const  onVideoPlay = (duration) =>{
    console.log("Video played at: ", duration);
  }

  const src = "https://res.cloudinary.com/dbgyytugh/video/upload/v1665658464/recipes/MetateskTrailer_14.49.50_hmrro3.mp4"
  return (
    <div className="video-box" >
      <VideoPlayer
      src={src}
      autoplay={true}
      controls={false}
      // onPlay={onVideoPlay(123)}
      className="video"   
      />
    </div>
  )
}

export default Video
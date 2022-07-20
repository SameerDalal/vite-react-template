import React from 'react'
import ReactPlayer from 'react-player';
import './info.css';


const MediaPlayer = () => (
  <div className="player-wrapper">
    <ReactPlayer
      url="  https://www.youtube.com/watch?v=goy4lZfDtCE"
      className="react-player"
      width="100%"
      height="100%"
      controls={false}
    />
  </div>
);

export default MediaPlayer



// PlaybackBar.jsx
import React from 'react';
//import './PlaybackBar.css';

const PlaybackBar = () => (
  <div className="playback-bar">
    <button>Prev</button>
    <button>Play/Pause</button>
    <button>Next</button>
    <div className="progress-bar">
      <div className="progress"></div>
    </div>
  </div>
);

export default PlaybackBar;

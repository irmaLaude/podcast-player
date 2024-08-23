// SongCard.jsx
import React from 'react';
//import 'SongCard.css';

const SongCard = ({ song }) => (
  <div className="song-card">
    <h3>{song.title}</h3>
    <p>{song.artist}</p>
  </div>
);

export default SongCard;

// ListenAgain.jsx
import React from 'react';
import SongCard from './SongCard';
//import './ListenAgain.css';

const ListenAgain = ({ songs }) => (
  <div className="listen-again">
    <h2>Listen Again</h2>
    <div className="song-list">
      {songs.map((song, index) => (
        <SongCard key={index} song={song} />
      ))}
    </div>
  </div>
);

export default ListenAgain;

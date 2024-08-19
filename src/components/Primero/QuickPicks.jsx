// QuickPicks.jsx
import React from 'react';
import SongCard from './SongCard';
//import './QuickPicks.css';

const QuickPicks = ({ picks }) => (
  <div className="quick-picks">
    <h2>Quick Picks</h2>
    <div className="song-list">
      {picks.map((pick, index) => (
        <SongCard key={index} song={pick} />
      ))}
    </div>
  </div>
);

export default QuickPicks;

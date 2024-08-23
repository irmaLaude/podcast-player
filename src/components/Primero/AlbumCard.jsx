// AlbumCard.jsx
import React from 'react';

const AlbumCard = ({ album }) => (
  <div className="album-card">
    <h3>{album.title}</h3>
    <p>{album.artist}</p>
  </div>
);

export default AlbumCard;

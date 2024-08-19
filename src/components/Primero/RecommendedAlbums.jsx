// RecommendedAlbums.jsx
import React from 'react';
import AlbumCard from './AlbumCard.jsx';

const RecommendedAlbums = ({ albums }) => (
  <div className="recommended-albums">
    <h2>Recommended Albums</h2>
    <div className="album-list">
      {albums.map((album, index) => (
        <AlbumCard key={index} album={album} />
      ))}
    </div>
  </div>
);

export default RecommendedAlbums;

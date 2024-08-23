// ArtistCard.jsx
import React from 'react';

const ArtistCard = ({ artist }) => (
  <div className="artist-card">
    <h3>{artist.name}</h3>
  </div>
);

export default ArtistCard;

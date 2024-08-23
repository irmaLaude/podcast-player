// SimilarArtists.jsx
import React from 'react';
import ArtistCard from './ArtistCard';
//import './SimilarArtists.css';

const SimilarArtists = ({ artists }) => (
  <div className="similar-artists">
    <h2>Similar to [Artist]</h2>
    <div className="artist-list">
      {artists.map((artist, index) => (
        <ArtistCard key={index} artist={artist} />
      ))}
    </div>
  </div>
);

export default SimilarArtists;

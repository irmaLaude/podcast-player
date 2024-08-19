/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React LUCAaaa</h1>
      <h1>INFORMATORIO 2024!!!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
// App.jsx
import React from 'react';
import Header from './components/Primero/Header.jsx';
import ListenAgain from './components/Primero/ListenAgain';
import QuickPicks from './components/Primero/QuickPicks';
import RecommendedAlbums from './components/Primero/RecommendedAlbums';
import SimilarArtists from './components/Primero/SimilarArtists';
import PlaybackBar from './components/Primero/PlaybackBar';
import './App.css'

const App = () => {
  // Datos estáticos simulados
  const songs = [
    { id: '1', title: 'Song One', artist: 'Artist One' },
    { id: '2', title: 'Song Two', artist: 'Artist Two' },
    { id: '3', title: 'Song Three', artist: 'Artist Three' }
  ];

  const picks = [
    { id: '1', title: 'Pick One' },
    { id: '2', title: 'Pick Two' },
    { id: '3', title: 'Pick Three' }
  ];

  const albums = [
    { id: '1', title: 'Album One', artist: 'Artist One' },
    { id: '2', title: 'Album Two', artist: 'Artist Two' },
    { id: '3', title: 'Album Three', artist: 'Artist Three' }
  ];

  const artists = [
    { id: '1', name: 'Artist One' },
    { id: '2', name: 'Artist Two' },
    { id: '3', name: 'Artist Three' }
  ];

  return (
    <div className="music-app">
      <Header />
      <ListenAgain songs={songs} />
      <QuickPicks picks={picks} />
      <RecommendedAlbums albums={albums} />
      <SimilarArtists artists={artists} />
      <PlaybackBar />
    </div>
  );
}

export default App;

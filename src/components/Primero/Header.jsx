// Header.jsx
import React from 'react';
//import sodaImage from '../../assets/soda.png'; 
import yuotuve from '../../assets/youtuve.png';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
//import './Header.css';

const Header = () => (
  <header>
    <img src={yuotuve} alt="Soda" />
    <SearchBar />
    <UserProfile />
  </header>
);

export default Header;
/*import React from 'react';
import sodaImage from '../../assets/soda.png'; // Ajusta la ruta según sea necesario

const Header = () => (
  <header>
    <img src={sodaImage} alt="Soda" />
    <h1>Header Component</h1>
  </header>
);

export default Header;*/


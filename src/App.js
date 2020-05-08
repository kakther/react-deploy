import React from 'react';
import profileImage from './img/portfolio_background.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1 >Medical Termonology</h1>
     <h2>Author: Dr. Aliza Islam and Dr. Tophika Islam </h2>
      <h3>Locaton</h3>
     <img src={profileImage} alt="profile-img"  />
    </div>
  );
}

export default App;

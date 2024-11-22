import React from 'react';
import Cube from './components/Cube';
//import Sphere from './components/Sphere';
import './App.css';

const App = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh' }}>
      <h1>3D Shapes with Three.js</h1>
      <div >
        <Cube /> {/* Display the Cube */}
      </div>
    </div>
  );
};

export default App;

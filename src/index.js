import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './logo-2.png';
import leti from './leti.jpg';
import App from './App';
import { Canvas } from '@react-three/fiber';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Background from './background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Background /> {/* Render the Background component */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Canvas shadows>
        <App />
      </Canvas>
  </React.StrictMode>
);

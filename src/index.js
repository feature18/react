import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import {Asteroids} from './Asteroids/Asteroids';
import {Destruction} from './Destruction/Destruction';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Asteroids />}/>
              <Route path="/destruction" element={<Destruction />}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);



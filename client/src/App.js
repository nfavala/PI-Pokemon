import React from 'react';
import { Route, Routes } from "react-router-dom";
import {LandingPage} from "./pages/landingPage";
import {Home} from "./pages/Home";
import { PokemonDetail } from './pages/PokemonDetail';
import { PokemonCreate } from './pages/PokemonCreate';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" element={<LandingPage/>}/>
        <Route exact path = "/landing" element={<LandingPage/>}/>
        <Route exact path = "/home" element={<Home/>}/>
        <Route exact path = "/detail/:name" element={<PokemonDetail/>}/>
        <Route exact path = "/create" element={<PokemonCreate/>}/>
      </Routes>
    </div>
  );
}

export default App;

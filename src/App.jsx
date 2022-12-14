import React, {useState} from "react";
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routers/AppRouter/AppRouter";
import Header from "./components/Header/Header";

function App() {

  let [lightMode, setLightMode] = useState(localStorage.getItem('lightMode') || 'Light')

  return (
    <div className={`myMain ${lightMode}`}>
      <BrowserRouter>
        <Header lightMode={lightMode} setLightMode={setLightMode}/>
        <AppRouter/>
      </BrowserRouter>
    </div>

  );
}

export default App;

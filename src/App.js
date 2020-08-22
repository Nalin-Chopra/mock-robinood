import React from 'react';
import './App.css';
import {MainScreen} from "./Views/MainScreen";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainScreen />
      </header>
    </div>
  );
}

export default App;

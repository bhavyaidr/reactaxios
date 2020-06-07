import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from "./Components/PersonList";
import PersonInput from "./Components/PersonInput";
import PersonDelete from "./Components/PersonDelete";

function App() {
  return (
    <div className="App">
      
      <PersonInput />
      <PersonList />
      <PersonDelete />
    </div>
  );
}

export default App;

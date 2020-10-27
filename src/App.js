import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return ( 
    <div className="app">
      <h1>Hi</h1>
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* React router */}
      </div>
      
    </div>
  );
}

export default App;
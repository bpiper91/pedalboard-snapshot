import React from 'react';
import './App.css';

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import Snapshot from './components/Snapshot';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Snapshot snapshotId='1' />
      </div>
      <Footer />
    </div>
  );
}

export default App;
import React, { useEffect ,useState, Fragment } from 'react';
import './App.css';
import { ListOfGifs } from './components/ListOfGifs'

function App() {
  return (
    <div className="App">
      <section className='App-content'>
        <ListOfGifs keyword='Ocean' />
      </section>
    </div>
  );
}

export default App;

import React, { useEffect ,useState, Fragment } from 'react';
import './App.css';
import { ListOfGifs } from './components/ListOfGifs'

function App() {
  const [keyword, setKeyword] = useState('panda')
  return (
    <div className="App">
      <section className='App-content'>
        <button onClick={() => setKeyword('mapache')}>cambiar keyword</button>
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App;

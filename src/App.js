import React, { useEffect ,useState, Fragment } from 'react';
import './App.css';
import { getGifs } from './services/getGifs'
import { Gifs } from './components/Gifs'

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs('batman').then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className='App-content'>
        <h1>Busca Giffs y diviertete!</h1>
        <input type='text' placeholder='Busca lo que quieras' id='input-searcher'></input>
        <button
          onClick={() => {
            const keyword = document.getElementById('input-searcher').value;
            getGifs(keyword).then(gifs => setGifs(gifs));
          }}
        >
        Buscar
        </button>
        <span>Puede que tarde un poco en cargar...</span>
        {
          gifs.map(({ title, id, url }) => {
            return <Gifs title={title} key={id} url={url}/>
          })
        }
      </section>
    </div>
  );
}

export default App;

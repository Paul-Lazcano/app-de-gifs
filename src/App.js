import React, { useEffect ,useState, Fragment } from 'react';
import './App.css';
import { ListOfGifs } from './components/ListOfGifs'
import { Link, Route } from "wouter";
function App() {
  const [keyword, setKeyword] = useState('');
  
  return (
    <div className="App">
      <section className='App-content'>
      <Link to='../' className='main-page-link'>
        App
      </Link>
      <Link to='/gif/:pandas'>Gifs de pandas</Link>
      <Link to='/gif/:anime'>Gifs de anime</Link>
      <Link to='/gif/:gatos'>Gifs de gatos</Link>
      <Link to='/gif/:mapache'>Gifs de mapache</Link>
        <Route 
          path="/gif/:keyword" 
          component={ListOfGifs}
        />
      </section>
    </div>
  );
}

export default App;

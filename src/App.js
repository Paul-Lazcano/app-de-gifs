import React, { useEffect ,useState, Fragment } from 'react';
import './App.css';
import { HomeLink } from "./components/HomeLink";
import { ListOfGifs } from './components/ListOfGifs'
import { Home } from "./pages/Home/Home";
import { Link, Route } from "wouter";
function App() {
  const [keyword, setKeyword] = useState('');
  
  return (
    <div className="App">
      <section className='App-content'>
        <div className="wrapper">
          <HomeLink />
          <Route 
            path="/" 
            component={Home}
          />
          <Route 
            path="/search/:keyword" 
            component={ListOfGifs}
          />
        </div>
      </section>
    </div>
  );
}

export default App;

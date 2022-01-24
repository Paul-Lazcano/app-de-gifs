import React, { useEffect ,useState, Fragment } from 'react';
import './App.css';
import { HomeLink } from "./components/HomeLink";
import { Home } from "./pages/Home/Home";
import { Route } from "wouter";
import { SearchResults } from "./pages/SearchResults/SearchResults";
function App() {
  
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
            component={SearchResults}
          />
        </div>
      </section>
    </div>
  );
}

export default App;

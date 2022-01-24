import React, { useState } from 'react';
import { Link, useLocation } from "wouter";

const POPULAR_GIFS = ['Anime', 'Gatos', 'Pandas', 'Megumin',];

export function Home() {
    
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();

    
    const handleSubmit = event => {
        event.preventDefault();
        // navegar a otra ruta
        pushLocation(`/search/:${keyword}`)
        console.log(keyword);
    }
    
    const handleChange = event => {
        setKeyword(event.target.value);
    }
    
    return (
        <nav className="menu">
            <form onSubmit={handleSubmit}>
                <label htmlFor="searcher" className="searcher-title">Busca lo que quieras!</label>
                <input 
                    onChange={handleChange} 
                    id="searcher" 
                    type="text" 
                    value={keyword} 
                    placeholder='Ej: pandas'
                />
            </form>
            <h4 className="menu__description">Los gifs más populares</h4>
            <ul>
                {
                    POPULAR_GIFS.map(popularGif => (
                        <li key={popularGif}>
                        <Link to={`/search/:${popularGif}`} className="menu__link link">Gifs de {popularGif}</Link>
                        </li>

                    ))
                }

            </ul>

        </nav>
  )
}

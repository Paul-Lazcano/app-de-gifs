import React from 'react';
import { Link, Route } from "wouter";

const POPULAR_GIFS = ['Anime', 'Gatos', 'Pandas', 'Megumin',];

export function Home() {
    
    return (
        <nav className="menu">
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

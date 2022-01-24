import React from 'react';
import { Gifs } from "./Gifs";

export function ListOfGifs({ gifs }) {
    
    return (
        <div className="list-of-gifs">
        {
        gifs.map(({ title, id, url }) => 
        <Gifs
            title={title} 
            key={id} 
            url={url}
            id={id}
        />)
        }
        </div> 
    )
}
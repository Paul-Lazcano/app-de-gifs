import React from 'react';
import './gif.css'
export function Gifs({ title, id, url }) {
  return (
    <a href={`#${id}`} id='{`#${id}`}'>
        <picture className="gif">
            <h4>{title}</h4>
            <img alt={title} src={url}/>
        </picture>
    </a>
  );
}
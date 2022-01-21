import React from 'react';
import './gif.css'
export function Gifs({ title, id, url }) {
  return (
    <a href={`#${id}`} id='{`#${id}`}'>
        <picture className="gifs">
            <h4 className='gifs__title'>{title}</h4>
            <img className='gifs__img' alt={title} src={url}/>
        </picture>
    </a>
  );
}
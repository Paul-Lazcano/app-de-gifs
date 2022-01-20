import React from 'react';

export function Gifs({ title, id, url }) {
  return (
    <div>
        <picture>
            <h4>{title}</h4>
            <img alt={title} src={url}/>
        </picture>
    </div>
  );
}

import React, {Fragment} from 'react';

export default function Searcher() {
  return (
    <Fragment>
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
    </Fragment>
  )
}

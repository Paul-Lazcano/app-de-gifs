import React, { useState, useEffect, Fragment } from 'react';
import { Gifs } from "./Gifs";
import { getGifs } from "../services/getGifs";

export function ListOfGifs({ params }) {
    const { keyword } = params;
    
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        getGifs( keyword )
            .then(gifs => setGifs(gifs))
    }, [keyword])
    return <Fragment>
        {
        gifs.map(({ title, id, url }) => 
        <Gifs
            title={title} 
            key={id} 
            url={url}
            id={id}
        />)
        }
    </Fragment> 
}
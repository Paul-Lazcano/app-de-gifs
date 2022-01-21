import React, { useState, useEffect, Fragment } from 'react';
import { Gifs } from "./Gifs";
import { getGifs } from "../services/getGifs";
import { HomeLink } from "./HomeLink";
export function ListOfGifs({ params }) {
    const { keyword } = params;

    const [loading, setLoading] = useState(false);

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        setLoading(true)
        getGifs( keyword )
            .then(gifs => {
                setGifs(gifs);
                setLoading(false);
            })
    }, [keyword])

    if (loading) return <i>꩜</i>
    
    return <div className="list-of-gifs">
        <h3 className='list-of-gifs__title'>Gifs de {keyword.replace(':', '')}</h3>
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
}
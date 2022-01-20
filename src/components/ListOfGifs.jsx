import React, { useState, useEffect } from 'react';
import { Gifs } from "./Gifs";
import { getGifs } from "../services/getGifs";

export function ListOfGifs({ keyword }) {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        getGifs(keyword).then(gifs => setGifs(gifs))
    }, [])
    return gifs.map(({ title, id, url }) => 
        <Gifs
            title={title} 
            key={id} 
            url={url}
        />)
}
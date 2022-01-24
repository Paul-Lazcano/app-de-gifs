import React from 'react';
import { Spinner } from "../../components/Spinner";
import { ListOfGifs } from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
export function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs } = useGifs({ keyword });
    return <>
        {loading
            ? <Spinner />
            : (
                <>
                    <h1 className='list-of-gifs__title'>Gifs de {keyword.replace(':', '')}</h1>
                    <ListOfGifs gifs={gifs} />
                </>
            )
        } 
    </>
}

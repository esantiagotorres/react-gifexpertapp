import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGriditem } from './GifGriditem';


export const Gifgrid = ({category}) => {

    const {data:images ,loading} = useFetchGifs();



    return (
        <>
        <h3>{category}</h3>

        <div className='card-grid'>
            {loading && <p>Loading</p>}

                {
                   images.map( img => (
                    <GifGriditem 
                    key={img.id}
                    {...img}
                    />


                    ))
                }
            
        </div>
        </>
    )
}

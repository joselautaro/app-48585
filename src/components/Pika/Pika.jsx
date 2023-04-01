import React, { useState, useEffect } from 'react'
import './Pika.css'


export const Pika = () =>{

    const [pokemon, setPokemon] = useState("");

    const [id, setId] = useState(1);

    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((data) =>{
                setPokemon({
                    numero: data.id,
                    nombre: data.name,
                    img: data.sprites.front_default,
                })
            })
    }, [])







    return(
        <>
        <h3 className='pika'>{pokemon.numero}</h3>
        <h3 className='pika'>{pokemon.nombre}</h3>
        <img src={pokemon.img} />
        </>
        
        
    )
}
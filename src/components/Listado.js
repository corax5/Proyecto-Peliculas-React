import React from 'react'
import { useEffect, useState } from 'react';
import { Editar } from './Editar';

export const Listado = ({Listadostate, setListadostate}) => {

    //const [Listadostate, setListadostate] = useState([]);

    const [editar, seteditar] = useState(0)

    useEffect(() => {
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadostate(peliculas);

        return peliculas
    }

    const borrarPeli = (id) => {
        //Conseguir peliculas almacenadas
        let pelis_Almacenadas = conseguirPeliculas();

        //Filtrar esas peliclas para que elimine del array la que no quiero
        let nuevo_array_pelis= pelis_Almacenadas.filter(peli => peli.id !== parseInt(id));

        //Actualizar estado del listado
        setListadostate(nuevo_array_pelis)
        
        //Actualizar datos en el LocalStorage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis))
    }


    return (
        <>
            {Listadostate != null ?
                Listadostate.map(peli => {

                    return (

                        <article className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>

                            <button className="edit" onClick={()=> seteditar (peli.id)}>Editar</button>
                            <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>


                            {/*aparece formulario de editar*/}
                        {editar === peli.id && (

                            <Editar peli={peli}
                            conseguirPeliculas = {conseguirPeliculas}
                            seteditar={seteditar}
                            setListadostate ={setListadostate}    
                            />

                        )}

                        </article>
                    );
                })
            : <h2>No hay peliculas para mostrar</h2>
            };
        </>
    )
}

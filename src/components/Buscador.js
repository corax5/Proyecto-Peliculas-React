import React from 'react'
import { useState } from 'react'

export const Buscador = ({Listadostate, setListadostate}) => {

    const [busqueda, setbusqueda] = useState('');
    const [noEncontrado, setnoEncontrado] = useState(false);

    const buscarPeli = (e) => {
        //crear estado y actualizarlo
        setbusqueda(e.target.value);
        
        //Filtrar para buscar coindiciencias
        let pelis_encontradas = Listadostate.filter(peli =>{
            return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
        });

        if(busqueda.length <= 1 || pelis_encontradas <= 0){
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
            setnoEncontrado(true);
        }else{
            setnoEncontrado(false);
        }

        //Actualizar estado del listado principal con lo que he logrado filtrar
        setListadostate(pelis_encontradas);
    }

    return (
        <div className="search">
            <h3 className="title">Buscador: {busqueda}</h3>
            {(noEncontrado == true && busqueda.length > 1 ) && (
                <span className='no-encontrado'>No se ha encontrado ninguna coindiciencia</span>
            )}

            <form>
                <input 
                type="text" 
                id="search_field" 
                name='busqueda'
                autoComplete='off'
                value={busqueda}
                onChange={buscarPeli}
                
                />
                <button id="search">Buscar</button>
            </form>
        </div>

    )
}

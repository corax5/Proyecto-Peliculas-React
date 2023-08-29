import React from 'react'

export const Editar = ({ peli, conseguirPeliculas, seteditar, setListadostate }) => {
    const titulo_componente = "Editar pelicula";

    const guardarEdicion = (e, id) => {
        e.preventDefault();

        //conseguir target del evento
        let target = e.target;

        //buscar el indice del objeto de la pelicula a actualizar
        const pelis_Almacenadas = conseguirPeliculas();
        const indice = pelis_Almacenadas.findIndex(peli => peli.id === id);

        //crear objeto con ese id de ese indice, con el titulo y descripcion del formulario
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        };

        //actualizar el elemento con ese indice
        pelis_Almacenadas[indice] = peli_actualizada;

        //guardar el nuevo array de objetos en el local storage
        localStorage.setItem("pelis", JSON.stringify(pelis_Almacenadas));

        //y actualizar estados
        setListadostate(pelis_Almacenadas);
        seteditar(0);
    }

    return (
        <div className='edit_form'>
            <h3 className='title'>{titulo_componente}</h3>
            <form onSubmit={e => guardarEdicion(e, peli.id)}>
                <input type='text'
                    name='titulo'
                    className='titulo_editado'
                    defaultValue={peli.titulo} />

                <textarea
                    name='descripcion'
                    defaultValue={peli.descripcion}
                    className='descripcion_editada' />

                <input type='submit' className='editar' value="Actualizar" />
            </form>
        </div>
    )
}

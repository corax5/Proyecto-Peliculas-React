import React, { useState } from 'react';

export const Crear = () => {
    const tituloComponente = "Añadir película";

    const [pelistate, setPelistate] = useState({
        titulo: '',
        descripcion: ''
    });

    const { titulo, descripcion } = pelistate;

    const conseguirDatosForm = e => {
        e.preventDefault();

        // Conseguir datos del formulario
        const target = e.target;
        const titulo = target.titulo.value;
        const descripcion = target.descripcion.value;

        // Crear objeto de la película a guardar
        const peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        setPelistate(peli);
    };

    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>

            <strong>
                {(titulo && descripcion) && `Has creado la película: ${titulo}`}
            </strong>

            <form onSubmit={conseguirDatosForm}>
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    placeholder="Título"
                />

                <textarea
                    id="descripcion"
                    name="descripcion"
                    placeholder="Descripción"
                />

                <input
                    type="submit"
                    id="save"
                    value="Guardar"
                />
            </form>
        </div>
    );
};

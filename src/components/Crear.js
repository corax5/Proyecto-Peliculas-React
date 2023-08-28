import React, { useState } from 'react';
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';


export const Crear = ({setListadostate}) => {
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
        const nuevoTitulo = target.titulo.value;
        const nuevaDescripcion = target.descripcion.value;

        // Crear objeto de la película a guardar
        const peli = {
            id: new Date().getTime(),
            titulo: nuevoTitulo,
            descripcion: nuevaDescripcion
        };

        // Guardar estado
        setPelistate(peli);

        //Actualizar estado del listado principal
        setListadostate(elementos => {
            return [...elementos, peli];
        });

        // Guardar en el almacenamiento local
        GuardarEnStorage("pelis", peli)

    }

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

 let elemento;
 
 export const GuardarEnStorage = (clave, elemento) => {
    // Conseguir los elementos que ya tenemos en el localstorage
    let elementos = JSON.parse(localStorage.getItem(clave)) || [];

//Comprobar si es un array
if (Array.isArray(elementos)){
    //Añadir dentro del array un elemento nuevo
    elementos.push(elemento);
}else {
    //crear nuevo array con la nueva elemento
    elementos = [elemento]
}


    // Guardar en el localstorage
    localStorage.setItem("pelis", JSON.stringify(elementos));

    return elemento;
}

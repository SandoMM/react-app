
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

/* Custom Hook */

//Ahora las imagenes estan dentro de este hook, no dentro de las props ni en el state de un componente
export const useFetchGifs = (category) => {
  
    const [images , setImages ] = useState([]);
    /* Cuando se carga por primera vez, se carga en "true" por el "useState"
    -Cuando dejo de cargar es el setIsLoading
    */
    const [ isLoading, setIsLoading ] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }



    useEffect( () => {
        getImages();
    }, [])

    /* Cuando una propiedad a apunta a una variable con el mismo nombre,
     Ej: "images: images" se puede obviar la propiedad y dejar el nombre de la variable(lo mismo con el isloading)*/
    return {
        images,
        isLoading
    }
}



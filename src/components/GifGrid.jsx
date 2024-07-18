
import { GifItem } from './GifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

/* Aca recibimos como property "category" */

export const GifGrid = ({ category }) => {
    
    const { images, isLoading } = useFetchGifs( category );

    console.log({ images, isLoading });
    /* Todo este codigo se resumio en un CustomHook "useFetchGifs.js"
    // const [images , setImages ] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs( category );
    //     console.log(newImages)
    //     setImages(newImages);
    // }



    // useEffect( () => {
    //     getImages();
    // }, [])
    */


    /*
    +const [counter , setCounter ] = useState(10)

    -El "useEffect" es un hook, que sirve para disparar efectos secundarios.
    +Un efecto secundario: algun proceso que queramos ejecutar cuando algo sucede.
        +Ej: -Cuando una variable "counter" cambie, quiero disparar un efecto
             -Cuando un valor de entrada cambie, quiero disparar un efecto
             -Cuando un Componente cambie, quiero disparar un efecto.

    -El useEffecto se constituye de 2 partes:
        1ra:El efecto que queramos disparar, que no es mas que un callback(Un callback es una funcion)
        2da:Una lista de dependencias son las condiciones por las cuales queremos volver a ejecutar el callback. 

        useEffect(() => {
        getGifs(category);
    }, [ ])
    -({Funcion}, [Dependencias])
    +Si dejo las dependencias vacias significa, que el hook "useEffect" solo se va a disparar la primera vez que se crea y se construye el componente
    +Con esto el estado puede estar cambiando "useState(10)", pero no se está incrementando la cantidad de peticiones, es decir no se
    está volviendo a realizar esas peticiones(Renderizar/redibujar el componente).

    (IMPORTANTE) CADA VEZ QUE TENGAMOS UNA NUEVA CATEGORIA(que se cree) ESA CATEGORIA VUELVE A CREAR EL COMPONENTE "gifGrid", pero no los anteriores, los anteriores
    se mantienen igual y por eso no se vuelve a disparar(se mantienen). Entonces, luego de crear el nuevo componente, y la categoria. Entra al componente "gifGrid", al momento 
    que entra un nuevo valor(Osea, que cambio su valor de entrada) este dispara el hook "useEffect" es decir, se vuelve a crear y como su dependencia esta vacia("[]"), pero sin
    renderizar nuevamente el componente.
    
    */

    /* No se puede usar la palabra reservada "class" en la seccion donde usamos html estandoen un archivo .jsx, ya que esta sirve para crear una clase o una instancia de la misma.
    para eso usamos "className"
    
    */

    return (
        < >
            <div className="panel">

                <h3>{ category }</h3>
                
                {
                    isLoading && ( <h2>Cargando...</h2> ) 
                }
                
                <div className="card-grid" >
                    {
                        // Estoy generando de manera dinamica elementos "li" x la cantidad de imagenes que tenga
                        //tendre mi retorn implicito de este objeto "li"
                        images?.map( ( image ) => (
                            <GifItem key={ image.id }
                            //De esta manera mando todas la propiedades de la imagen, y manda todas sus propiedades. En otras palabras, las propiedades las esparzo en el "GifItem"
                            //Esto sirve para que recibamos las imagenes como property's y yo selecciono las que quiera usar 
                                        { ...image }
                            />
                        ))
                    }

                </div>
            </div>



        </>
    )
}
//tRWgdkYSdsgz3eABt7qkOatvjFVGzzfL
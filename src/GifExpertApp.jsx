import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    //Recordar que tengo que importar el useState. Ademas, ya tengo un espacio en memoria para manejar las categorias
    //Recordatorio de USAR CAMMEL KEYS
    //Lo inicializaremos como un arreglo(y con el metodo useState, siempre sera una arry)
    const [ categories, setCategories ] = useState([ 'OnePunch']);

    /* Si yo necesito renderizar un listado, por ejemplo, basado en las categorias, como lo hago? 
    +En este caso hare que "OnePunch" sea los primeros en mostrarse de las categorias
    -Tomo el arreglo de "categorias" y lo llevo a una expresion en javascript "{}", en donde usaremos el metodo ".map()"(metodo propio de los arreglos de js)
    -NO COLOCAR LOS HOOKS EN CONDICIONALES, ej: IF().
    
    */

    /* Evitar el metodo ".push" al momento de agregar algun elemento a la arry.
    -El Metodo ".push" muta el objeto.
    -React hasta donde es posible trata de evitar las mutaciones de los objetos

    */

    //Aca agregamos una nueva categoria
    //Este newCategory ya viene limpio por la funcion "onSubmit"
    const onAddCategory = ( newCategory ) => { 
        // console.log(newCategory);
        //categories.push('Valorant);

        /* Estoy evaluando si existe el "newCategory" en la arry 
        - 1. Es preguntar a categories si ya viene incluido la nueva categoria que vamos a insertar(osea "newCategory") y
        para eso utilizamos el metodo ".includes()"
        -Entonces, si la categoria ya existe no hara nada, pero si la categoria no existe, pasar a la siguente linea de cordigo para insertarla.
        */
        if (categories.includes(newCategory)) return;



        /* Usamos el operador "Spread(...)", que hara una copia de todas las categorias que hay y al final voy añadir valorant 
        +Si lo quiero insertar al inicio del todo solo tengo que intercambiar las ubicaciones, como por ejemplo:
        setCategories([ 'Valorant', ...categories  ]);
        */
        //1ra forma de hacerlo: 
        setCategories([ newCategory, ...categories ]);
        
        /* creo una variable cat(hace referencia al area local "setCategories"). Desestructuro "cat" y le añado 'Valorant'
        -Aqui estamos utilizando un callback, que tambien se les puede mandar a las funciones del useState(que en este caso se la estamos mandando a "setCategories")
        */
        //2da forma de hacerlo
        // setCategories( cat => [ ...cat, 'Valorant' ]);
    }



    return (
        <>
            {/* Esto se divide en 3 partes */}

            {/* TITULO de mi app */}
            <h1>Buscar Gif</h1>

            {/* Lo ideal es que el input deberia de estar en un componente independiente  para que podamos recibir informacion y asi, sea mas facil probarlo */}
            {/* Input */}
            {/* "setCategories"(lo morado) ahora es una propiedad de "AddCategory", que ahora va a recibir la funcion "setCategories"  
            -Ahora lo que envie "setCategories" lo recibira "AddCategory"
            */}
            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ event => onAddCategory(event) }
            />
            {/* Listado de GIF */}
        
        
            {/* Lo que estoy haciendo aca es clonar un elemento "<li>"
                -Se clonara la cantidad de veces, que hayan elementos en el arreglo que cree con "categories".
                -En este caso le estoy pasando 2 elementos a "category"
                -El metedo ".map()" crea una nueva matriz(arry) con los resultados de la llamada, que en este caso esta pasandole 2 elementos = "OnePuch" y "Dragon Ball"
                -No hay que usar el indice(index)= " categories.map( ( category, i )", si no, un indentificador unico(ya sea el id o algo unico que este en la iteracion)
                -React utiliza el valor de la "key" para saber cuando un elemento se elimino.(no usar el indice con las llaves)
                */}

            { 
                
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } 
                    />    
                ))
                // {/* -Cuando estamos iterando elementos y construyendo de manera dinamica, tenemos que proporcionar una "key"(que seria una property), que su valor debe ser unico, ya sea: una fecha, numero, hora, etc.(lo que sea unico) 
                //  -La key debe de lleverla el elemento que se esta iterando, que en este caso seria el "div"
                //  +(IMPORTANTE)Cuando se quiera regresar un objeto en el HTML, es necesario colocarlo entre "()", ej: (<div></div>)
                //  +El return esta implicito, ya que retorna un solo objeto */}
                //     (<div key={ category }>
                //         <h3>{ category }</h3>
                //         <li>{ category }</li>
                //     </div>)
                // En vez de regresar todo este objeto, regresaremos nuestro componente "GifGrid" y junto con el la "key"
            }
                
                {/* Gif Item */}
        </>
    )
}





/* -El "<ol><ol/>", que significa order list. Hara, que cada elemento("<li><li/>") quede ordenado hacia abajo y enumerado




*/
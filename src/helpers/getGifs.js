


/* Realizaremos una peticion HTTP para traer la informacion de la API
-No necesito ningun argumento en esta funcion, ya que la categoria ya la tengo recibida en el componente(category)
-Debemos de obligar que la categoria siempre venga y eso lo hacemos con los propstype
*/
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=tRWgdkYSdsgz3eABt7qkOatvjFVGzzfL&q=${ category }&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    
    }));
     
    return gifs; 
 
}
 

/* manejaremos el estado de este input */

import { useState } from 'react';
/* Recibimos lo que nos envia "GifExpertApp", que seria "onNewCategory" */
export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('')
  
  /* Para no usar el event. Tenemos que desestructuras "target"(una de las propiedades que viene en el evento) 
  -Aqui siempre estoy recibiendo el "event"(Siempre)
  */
  const onInputChange = ({ target }) => {
    //dentro del evento que activo "onChange" trae consigo el taget y dentro de este trae el "value"(lo que necesitamos)
    //le extraigo el "value" de "target" ())
    
    /* (Recordatorio) Con el set podemos cambiar el valor del inputValue y en su defecto, el valor del input(la barra de texto)*/
    setInputValue( target.value )
  }

  /* El metodo ".trim" elimina los espacios adelante y atras */

  const onSubmit = (event) => {
  
    event.preventDefault();
    //En esta condicion evaluo que al menos alla una letra en el inputValue
    //Aca estoy evaluando el valor que me manda el input quitandole los espacios de adelante y atras(Lo hace el metodo ".trim()")
    if ( inputValue.trim().length <= 1 ) return;
      
    //El "inputValue" es el que voy a tener que enviar para actualizar la info en el padding. 
    /* Le mandaremos un callback, de esta manera mantendremos el listado de categorias sin hacer una nueva(mas que nada agregar una)
    -Entonces, inserto lo que tengo en el "inputValue" + las categorias que ya tengo "...categories" 
    -De esta manera inserto una categoria en un arry
    */
    //setCategory( (categories) => [ inputValue, ...categories ]);
    
    /* Ahora mando a llamar a "onNewCategory" para mandarle el "inputValue" limpio.
    -El metodo .trim() "limpia" lo que viene escrito en el input(es decir, le quita los espacio adelante y atras)
    */
   //Como ya insertamos la categoria, ahora limpiaremos el input
    setInputValue('');
    onNewCategory( inputValue.trim() );
  }

  /* Si quiero que mi "input" tenga por defecto el valor de "inputValue"
  -Le tendria que agregar la property "value={}" (no son alementos HTML)
  -Le tengo que agregar el metodo "onChange"(el metodo onChange es un evento en el trae consigo elementos al momento de activarse)
  -Para evitar que haga un full refresh a la pagina web/propagacion del formulario. Para eso
  usaremos la funcion "preventDefault()"
  */
  return (
    <>
      <form onSubmit={ onSubmit }> 

        <input
          type="text"
          placeholder="Buscar gif"
          //Lo asociamos
          value={ inputValue }
          //Capturamos el valor
          onChange={ onInputChange }
      />
     
      </form>
     <p onChange={ onInputChange }>{ inputValue }</p>
    </>
  )
}

/* En este caso estoy mandando una funcion: "onChange={ (event) => onInputChange(event) }". Cuyo primer argumento, es el argumento que 
estoy mandandole a la funcion que quiero ejecutar. Entonces, puedo obviar poner asi, y unicamente mandar la referencia a esa funcion, por lo cual
me quedaria asi: "onChange={ onInputChange }"

+Los fragmentos se usan cuando tenemos elementos o mas de un elemento que va a ser el nodo root de ese componente
-En este caso el form es el unico elemento que estoy regresando.
-Dentro del form puedo tener mas un input y no afectaria en nada, ya que, seguiria regresando 1 elemento
-si el input lo dejara afuera del form, ya no tendria un elemento padre, si no, dos hermano y ahi tendria que ocupar el "<></>"(fragmento)
*/
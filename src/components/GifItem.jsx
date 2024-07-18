

/* Aca recibo las propertys de la imagen. Solo selecciono las que me sirven

*/
export const GifItem = ({ title, url, id }) => {

  return (
    <div className="card" data-aos="fade-up" >
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
 
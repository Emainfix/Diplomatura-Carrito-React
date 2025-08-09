//El navbar es un componente estático este es dinamico porque usamos state, cambios de estado
import { useState, useEffect } from "react" //Estos son dos hooks(funciones especialers de react)
import useCarritoStore from "../Stores/carritoStore"

const Products = () => {
    const [productos, setProductos] = useState([])
    // products es la variable inicial y su valor lo defino con useState(). En este caso un array vacío.
    //La función setProducts me permite modificar el estado de mi variable product

    const buyProducts = useCarritoStore((state) => state.buyProducts);

    useEffect(() => {
      //Es un Hook de efecto secundario.
      //Un efecto secundario es cuando una función afecta "el mundo exterior", fuera de su propia lógica.
      //Este hook Sirve para ejecutar código después de que el componente se renderiza.
      //Renderizar es Convertir el código JSX de ese componente en HTML que se muestra en la pantalla del navegador.
      fetch("data.json") // fetch es una función integrada en JavaScript que sirve para hacer solicitudes a servidores web. Por ejemnplo obtener datos de una API
      //devuelve una promesa. no es directamente la respuesta, sino una promesa que Representa la solicitud en curso.
      .then((response) => response.json())
      //.then() es un método que se usa con promesas en JavaScript para determinar que cuando una promesa se cumpla con éxito se haga algo más...
      //response contiene la respuesta cruda del servidor. En este caso el cuerpo (body), que aún no está convertido a JSON.
      //.json() convierte el cuerpo de esa respuesta a JSON
      .then((datos) => setProductos(datos))
      //Finalmente le decimos que esos datos del JSON los meta en el array de la variable productos. Esto se hace usando la función setProductos.
    }, [])

    return productos.map((producto) => {//Con map recorro cada objeto dentro del array de mi variable productos(JSON)
      return (
        <div key={producto.id}  className="col-12 col-lg-4 my-4 d-flex justify-content-center">
          <div className="card m-2 text-center" style={{width: '18rem'}}>{/* El key le dice a react que cada //identifdicador del objeto producto va a ser id.*/}
            <img className="card-img-top" src={producto.img} alt="Card image cap"/>{/*Llamamos al objeto que toma map, en este caso producto y su propiedad img*/}
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">US$ {producto.price}.00</p>
                <button onClick={() => buyProducts(producto)} className="btn-comprar">Agregar al carrito</button>
            </div>
          </div>
        </div>
  )
    })
  
}
export default Products
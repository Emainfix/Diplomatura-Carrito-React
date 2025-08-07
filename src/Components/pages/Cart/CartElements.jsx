import useCarritoStore from "../../../Stores/carritoStore"
import ItemCounter from "./ItemCounter"

const CartElements = () => {
    const carrito = useCarritoStore((state) => state.carrito);
    const eliminarProducto = useCarritoStore((state) => state.eliminarProducto);

    return carrito.map((producto) => (
            <div key={producto.id} className="card m-2" style={{width: '18rem'}}>
                <img className="card-img-top" src={producto.img} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <ItemCounter producto={producto}/>{/*Con esto hago una propiedad que me ayuda a llevar los datos del parametro producto a mi componente ItemCounter*/}
                    <p className="card-text">${producto.price * producto.quanty}</p>
                    <button onClick={() => eliminarProducto(producto.id)} className="btn btn-primary">Eliminar</button>
                </div>
            </div>
    ))
}
export default CartElements
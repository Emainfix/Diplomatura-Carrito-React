import useCarritoStore from "../../../Stores/carritoStore"
import ItemCounter from "./ItemCounter"

const CartElements = () => {
    const carrito = useCarritoStore((state) => state.carrito);
    const eliminarProducto = useCarritoStore((state) => state.eliminarProducto);

    return carrito.map((producto) => (
            <div key={producto.id} className="container">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center align-items-center gap-3 border p-2">
                        <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start align-items-center"><img style={{ width: "60px", height: "60px", objectFit: "cover" }} src={producto.img} alt="" />
                        <h3 className="mx-md-auto m-2 mb-0 fs-5">{producto.name}</h3>
                        </div>
                        <div className="col-12 col-md-3 d-flex align-items-center justify-content-center"><ItemCounter producto={producto}/></div>
                        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end"><h4 className="m-md-auto m-2  text-success">US$ {producto.price  * producto.quanty}.00</h4>
                        <button onClick={() => eliminarProducto(producto.id)} className="btn-eliminar btn-primary">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
    ))
}
export default CartElements
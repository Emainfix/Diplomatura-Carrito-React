import useCarritoStore from "../../../Stores/carritoStore"

const ItemCounter = ({producto}) => {
    const buyProducts = useCarritoStore((state) => state.buyProducts);
    const restarProducto = useCarritoStore((state) => state.restarProducto);

  return (
    <div>
        <div className="row">
            <p onClick={()=> restarProducto(producto)} className="m-2 btn btn-secondary">
            -
        </p>
        <p className="m-2">
            {producto.quanty}
        </p>
        <p onClick={() => buyProducts(producto)} className="m-2 btn btn-secondary">
            +
        </p>
        </div>
        
    </div>
  )
}
export default ItemCounter
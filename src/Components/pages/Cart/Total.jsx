import useCarritoStore from "../../../Stores/carritoStore"

const Total = () => {
  const carrito = useCarritoStore((state) => state.carrito);

  const total = carrito.reduce((acc, el) => acc + el.price * el.quanty, 0);

  return (
    <div>
        <h3>Total a pagar: {total}</h3>
    </div>
  )
}
export default Total
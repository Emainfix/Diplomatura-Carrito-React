import useCarritoStore from "../../../Stores/carritoStore"

const Total = () => {
  const carrito = useCarritoStore((state) => state.carrito);

  const total = carrito.reduce((acc, el) => acc + el.price * el.quanty, 0);

  return (
    <div className="container">
        <h3 className="my-5">Total a pagar:<strong> US$ {total}.00</strong></h3>
    </div>
  )
}
export default Total
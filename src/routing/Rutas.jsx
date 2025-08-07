import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/pages/Home";
import Cart from "../Components/pages/Cart/Cart";

const Rutas = () => {
  return (
    <BrowserRouter>
      <section>
          <Routes>
              <Route path= "/" element={<Home/>} />
              <Route path="/carrito" element={<Cart/>}/>
          </Routes>
      </section>
    </BrowserRouter>
  )
}
export default Rutas
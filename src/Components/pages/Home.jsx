
import Products from "../Products"
import Navbar from "./Navbar"


const Home = () =>{
    return (
    <>
      <Navbar/>
      <div className="container">
        <div className="row d-flex justify-content-center"><Products/></div>
      </div>
      
    </>
  )
}

export default Home
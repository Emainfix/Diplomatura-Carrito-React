import Navbar from "./Navbar"
import {useForm} from 'react-hook-form'

const RegisterForm = () => {

    const {register, handleSubmit} = useForm()

    const enviado = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <div>
            <Navbar/>
            <div className="container">
                <section className="formulario">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-lg-6 container-form">
                            <form onSubmit={enviado} className="contacto" action="">
                                <label className="m-3" htmlFor="nombre">Nombre</label>
                                <input className="campo" type="text" {...register("nombre")} />
                            
                                <label className="m-3" htmlFor="correo">Correo</label>
                                <input type="email" {...register("correo")} />
                            
                                <label className="m-3" htmlFor="contraseña">Contraseña</label>
                                <input type="password" {...register("contraseña")} />
                            
                                <label className="m-3" htmlFor="confirmarContraseña">Confirmar Contraseña</label>
                                <input type="password" {...register("confirmarContraseña")} />
                            
                                <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                                <input type="date" {...register("fechaNacimiento")} />
                                
                                <label htmlFor="pais">País</label>
                                <select {...register("pais")} name="" id="">
                                    <option value="ar">Argentina</option>
                                    <option value="ch">Chile</option>
                                    <option value="mx">México</option>
                                </select>
                            
                                <div className="d-flex justify-content-center align-items-center">
                                    <label htmlFor="terminos">Acepto los términos y condiciones</label>
                                    <input type="checkbox" {...register("terminos")} />
                                </div>
                                <button className="btn-enviar">
                                    Enviar
                                </button>
                            </form>
                </div>
                </div>
                </section>
            </div>
        </div>
    )
}
export default RegisterForm
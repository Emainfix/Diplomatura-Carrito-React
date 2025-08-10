import Navbar from "./Navbar"
import {useForm} from 'react-hook-form'
import { useRegistro } from "../../hooks/useRegistro";//Custom Hook

const RegisterForm = () => {

    const { registrar, verEnvio } = useRegistro();//Custom Hook

    const {register, handleSubmit, formState: {errors}, watch} = useForm();

    const enviado = handleSubmit((data) => {
        console.log(data)
        verEnvio()
    })

    return (
        <div>
            <Navbar/>
            <div className="container">
    <section className="formulario">
        <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-6 container-form">
                <form onSubmit={enviado} className="contacto" action="">
                    
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input id="nombre" className="campo form-control" type="text" {...register("nombre", {
                            required: { value: true, message: "Debes colocar tu nombre" },
                            minLength: { value: 2, message: "El nombre debe tener un mínimo de 2 caracteres" },
                            maxLength: { value: 40, message: "El nombre debe tener un máximo de 40 caracteres" }
                        })} />
                        {errors.nombre && <span className="text-danger">{errors.nombre.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label">Correo</label>
                        <input id="correo" className="form-control" type="email" {...register("correo", {
                            required: { value: true, message: "Debes colocar tu dirección de correo" },
                            pattern: { value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "La dirección de correo no es válida" }
                        })} />
                        {errors.correo && <span className="text-danger">{errors.correo.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="contraseña" className="form-label">Contraseña</label>
                        <input id="contraseña" className="form-control" type="password" {...register("contraseña", {
                            required: { value: true, message: "Introduzca una contraseña" },
                            minLength: { value: 4, message: "La contraseña debe tener un mínimo de 4 caracteres" },
                            maxLength: { value: 20, message: "La contraseña debe tener un máximo de 20 caracteres" }
                        })} />
                        {errors.contraseña && <span className="text-danger">{errors.contraseña.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmarContraseña" className="form-label">Confirmar Contraseña</label>
                        <input id="confirmarContraseña" className="form-control" type="password" {...register("confirmarContraseña", {
                            required: { value: true, message: "Requerido" },
                            validate: value => value === watch("contraseña") || "Las contraseñas deben coincidir"
                        })} />
                        {errors.confirmarContraseña && <span className="text-danger">{errors.confirmarContraseña.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
                        <input id="fechaNacimiento" className="form-control" type="date" {...register("fechaNacimiento", {
                            required: { value: true, message: "Ingrese su fecha de nacimiento" },
                            validate: (value) => {
                                const fechaNacimiento = new Date(value);
                                const fechaActual = new Date();
                                const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                                return edad >= 18 || "El usuario debe ser mayor de edad";
                            }
                        })} />
                        {errors.fechaNacimiento && <span className="text-danger">{errors.fechaNacimiento.message}</span>}
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="pais" className="form-label">País</label>
                        <select id="pais" className="form-select" {...register("pais")}>
                            <option value="ar">Argentina</option>
                            <option value="ch">Chile</option>
                            <option value="mx">México</option>
                        </select>
                    </div>
                
                    <div className="mb-3">
                        <div className="d-flex justify-content-start align-items-center">
                            <input 
                                className="caja form-check-input my-2 me-2" 
                                type="checkbox" 
                                id="terminos"
                                {...register("terminos", {
                                    required: { value: true, message: "Debes aceptar los términos y condiciones" }
                                })} 
                            />
                            <label className="form-check-label my-2" htmlFor="terminos">
                                Acepto los términos y condiciones
                            </label>
                        </div>
                        {errors.terminos && <span className="d-block text-danger">{errors.terminos.message}</span>}
                    </div>
                    
                    <button className="btn-enviar btn btn-primary w-100" type="submit">
                        Registrar
                    </button>

                    {registrar && (
                        <div className="alert alert-success mt-2" role="alert">
                            Registro exitoso ✅
                        </div>
                    )}
                </form>
            </div>
        </div>
    </section>
</div>
        </div>
    )
}
export default RegisterForm
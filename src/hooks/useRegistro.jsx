import { useState } from "react";

export function useRegistro() {
        const [registrar, setRegistrar] = useState(false);

        const verEnvio = () => {
            setRegistrar(true)

        setTimeout(()=> setRegistrar(false), 3000);
        }
    return {registrar, verEnvio};
}

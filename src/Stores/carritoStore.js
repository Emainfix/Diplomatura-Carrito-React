import { create } from "zustand";

const useCarritoStore = create((set, get) => ({
    carrito: [],

    buyProducts: (producto) => {
        const carrito = get().carrito;
        const repetido = carrito.find((item) => item.id === producto.id);

        if (repetido) {
            const nuevoCarrito = carrito.map((item) =>
            item.id === producto.id ? {...producto, quanty: repetido.quanty + 1} : item);
        set({ carrito: nuevoCarrito });
        }else{
            set({ carrito: [...carrito, {...producto, quanty: 1}] });
        }
    },

    restarProducto: (producto) => {
        const carrito = get().carrito;
        const repetido = carrito.find((item) => item.id === producto.id);

        if (repetido && repetido.quanty > 1){
            const nuevoCarrito = carrito.map((item) =>
            item.id === producto.id ? {...producto, quanty: repetido.quanty - 1} : item);
        set({ carrito: nuevoCarrito});
        }
    },

    eliminarProducto: (id) => {
        const carrito = get().carrito;
        const newCarrito = carrito.filter((producto) => producto.id !== id);
        set({ carrito: newCarrito});
    },

    getTotalItems: () => get().carrito.length,
    setCarrito: (nuevoCarrito) => set({ carrito: nuevoCarrito})
}))

export default useCarritoStore;
import { writable } from "svelte/store";

type Pedido = {
    prato: string,
    prioridade: number,
    pago: boolean,
    entrega: number | string
};

export default Pedido;
export const pedidos = writable<Pedido[]>([]);


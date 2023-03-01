<script lang="ts">
    import { pedidos } from "./pedidos";

    type Pedido = {
        prato: string,
        prioridade: number,
        pago: boolean,
        entrega: number | string
    };

    let pedido: Pedido = {
        prato: '',
        prioridade: 0,
        pago: false,
        entrega: ''
    }
    
    function enviar() {
        if (!validar())
            return;

        pedidos.update((pedidos) => {
            return [...pedidos, pedido];
        });
    }

    const validar = () => {
        if (pedido.prato === '') {
            return false;
        }

        if (pedido.prioridade === 0) {
            return false;
        }

        if (pedido.entrega === '') {
            return false;
        }

        return true;
    }

    $: console.log(validar());

    pedidos.subscribe((pedido) => console.log(pedido));


</script>

<form on:submit|preventDefault={enviar}>
    <label for="prato">Prato</label>
    <input type="text" name="prato" id="prato" bind:value={pedido.prato} />

    <label for="prioridade">Prioridade</label>
    <input type="number" name="prioridade" id="prioridade" bind:value={pedido.prioridade} />

    <label for="pago">Pago</label>
    <input type="checkbox" name="pago" id="pago" bind:checked={pedido.pago} />

    <label for="entrega">Entrega</label>
    <input type="number" name="entrega" id="entrega" bind:value={pedido.entrega} />

    <button type="submit">Enviar</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    label {
        display: block;
    }

    input {
        display: block;
    }

    button {
        width: 100%;
    }

    button[type="submit"] {
        background-color: #000;
        color: #fff;
    }

    button[type="submit"]:hover {
        background-color: #fff;
        color: #000;
    }

    button[type="submit"]:active {
        background-color: #000;
        color: #fff;
    }

    button[type="submit"]:focus {
        outline: none;
    }

    button[type="submit"]:disabled {
        background-color: #ccc;
        color: #000;
    }

    button[type="submit"]:disabled:hover {
        background-color: #ccc;
        color: #000;
    }

    button[type="submit"]:disabled:active {
        background-color: #ccc;
        color: #000;
    }

    button[type="submit"]:disabled:focus {
        outline: none;
    }

    button[type="submit"]:not(:disabled):hover {
        background-color: #fff;
        color: #000;
    }

    button[type="submit"]:not(:disabled):active {
        background-color: #000;
        color: #fff;
    }

    button[type="submit"]:not(:disabled):focus {
        outline: none;
    }

    button[type="submit"]:not(:disabled):hover:active {
        background-color: #fff;
        color: #000;
    }


</style>




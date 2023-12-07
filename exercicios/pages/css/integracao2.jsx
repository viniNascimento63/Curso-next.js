import estilos from "./integracao2.module.css"

// Aplicando estilos de maneira local, ou seja, somente para esse componente
export default function integracao2() {
    return (
        <div id={estilos.integracao2}>
            {/* Acessando as classe como se estilos fosse um objeto */}
            <div className={estilos.vermelho}>Texto #01</div>
            <div className={estilos.azul}>Texto #02</div>
            <div className={estilos.branco}>Texto #03</div>
        </div>
    );
}
function gerarLista(num = 10) {
    
    const lista = [];

    for (let i = 0; i < num; i++) {
        lista.push(<span>{i+1} </span>)
    }

    return lista
}

export default function lista() {
    return (
        <div>
            {gerarLista(15)}
        </div>
    );
}
export default function jsx4() {

    const subtitulo = 'Estou no JavaScript!'
    let trechoH3 = <h3>3 x 3 = {3*3}</h3>

    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            {trechoH3}
            <h4>O maior número entre 6 e 68 é: {Math.max(6, 68)}</h4>
            <h5>O 30 está entre 9 e 15? {entre(30, 9, 15)}</h5>
        </div>
    )
}

function entre(valor, min, max) {
    if (valor >= min && valor <= max) {
        return 'Sim';
    } else {
        return 'Não';
    }
}
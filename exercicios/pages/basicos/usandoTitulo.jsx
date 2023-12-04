// Utilizando components
import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
    return (
        <div>
            <Titulo 
                // Propriedades
                principal="Página de Cadastro" 
                secundario="Incluir, alterar e excluir coisas"
                pequeno // Ou pequeno={true}
            />
            <Titulo 
                // Propriedades
                principal="Página de Login" 
                secundario="Informe e-mail e senha"
            />
        </div>
    )
}
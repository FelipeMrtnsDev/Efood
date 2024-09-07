import ItemRestaurante from "../ItemRestaurante"
import ItensRestaurante from "../../models/ItensRestaurante"
import { Listagem } from "./styles"

type Props = {
    itens: ItensRestaurante[]
}

function ListItensRestaurante({ itens }: Props) {
    return(
        <Listagem>
            {itens.map((item) => (
                <ItemRestaurante 
                    alt={item.titulo}
                    descricao={item.descricao}
                    id={item.id}
                    imagem={item.imagem}
                    titulo={item.titulo}
                    key={item.id}
                />
            ))}
        </Listagem>
    )
}

export default ListItensRestaurante
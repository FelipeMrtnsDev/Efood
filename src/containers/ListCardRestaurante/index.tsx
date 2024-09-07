import CardRestaurante from "../CardRestaurante"
import Restaurante from "../../models/Restaurante"
import { CardsRestaurante } from './styles'

type Props = {
    restaurantes: Restaurante[]
}

function ListCardRestaurante({ restaurantes }: Props) {
    return (
        <CardsRestaurante>
            {restaurantes.map((restaurante) => (
                <CardRestaurante
                key={restaurante.id}
                etiqueta2={restaurante.etiqueta2}
                etiqueta1={restaurante.etiqueta1}
                alt={restaurante.alt}
                avaliacao={restaurante.avaliacao}
                descricao={restaurante.descricao}
                imagem={restaurante.imagem}
                titulo={restaurante.titulo}
                />
            ))}
        </CardsRestaurante>
    )
}

export default ListCardRestaurante
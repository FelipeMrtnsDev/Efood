import { Product } from "../../pages/Home"
import CardRestaurante from "../CardRestaurante"
import { CardsRestaurante } from './styles'

type Props = {
    restaurantes: Product[]
}

function ListCardRestaurante({ restaurantes }: Props) {
    return (
        <CardsRestaurante>
            {restaurantes.map((restaurante) => (
                <CardRestaurante
                id={restaurante.id}
                etiqueta2={restaurante.destacado}
                etiqueta1={restaurante.tipo}
                alt={restaurante.titulo}
                avaliacao={restaurante.avaliacao}
                descricao={restaurante.descricao}
                imagem={restaurante.capa}
                nome={restaurante.titulo}
                />
            ))}
        </CardsRestaurante>
    )
}

export default ListCardRestaurante
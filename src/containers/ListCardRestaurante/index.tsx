import CardRestaurante from "../CardRestaurante"
import { CardsRestaurante } from './styles'

type restaurantes = {
    capa: string
    alt: string
    nome: string
    avaliacao: number
    descricao: string
    tipo: string
    destacado?: boolean
    id: number
}

type Props = {
    restaurantes: restaurantes[]
}

function ListCardRestaurante({ restaurantes }: Props) {
    return (
        <CardsRestaurante>
            {restaurantes.map((restaurante) => (
                <CardRestaurante
                id={restaurante.id}
                etiqueta2={restaurante.destacado}
                etiqueta1={restaurante.tipo}
                alt={restaurante.alt}
                avaliacao={restaurante.avaliacao}
                descricao={restaurante.descricao}
                imagem={restaurante.capa}
                nome={restaurante.nome}
                />
            ))}
        </CardsRestaurante>
    )
}

export default ListCardRestaurante
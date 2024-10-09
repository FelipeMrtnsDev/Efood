import { Botao, Card, Descricao, Imagem, Tituloh2 } from './styles'

type Props = {
    imagem: string,
    alt: string,
    titulo: string,
    descricao: string,
    id: number
    onClick: any
}

function ItemRestaurante({ imagem, alt, titulo,descricao, id, onClick }: Props) {
    return(
            <Card onClick={onClick} key={id}>
                <Imagem>
                    <img src={imagem} alt={alt} />
                </Imagem>
                <Tituloh2>
                    <h2>{titulo}</h2>
                </Tituloh2>
                <Descricao>
                    <p>{descricao}</p>
                </Descricao>
                <Botao to='#'>
                    <button>Mais informações</button>
                </Botao>
            </Card>
    )
}

export default ItemRestaurante
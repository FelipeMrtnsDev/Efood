import * as S from './styles'
import estrela from '../../assets/images/estrela.svg'
import { Link } from 'react-router-dom';

type CardRestauranteProps = {
    imagem: string;
    alt: string;
    nome: string;
    avaliacao: number;
    descricao: string;
    etiqueta1: string;
    etiqueta2?: boolean;
    id: number;
}

function CardRestaurante({imagem, alt, nome, avaliacao, descricao, etiqueta1, etiqueta2, id}: CardRestauranteProps) {
    const getDescricao = (descricao: string) => {
        if (descricao.length > 272) {
            return descricao.slice(0, 272) + '...'
        }
        return descricao
    }

    return(
        <S.CardRestaurante>
            <S.DivImg>
                <S.Etiquetas>
                    <p>{etiqueta1}</p>
                    {etiqueta2 === true ? (
                        <p style={{display: 'flex' }}>Destaque da semana</p>
                    ) : (
                        <p style={{display: 'none'}}></p>
                    )
                }
                </S.Etiquetas>
                <img src={imagem} alt={alt} />
            </S.DivImg>
            <S.TextoAvaliacao>
                <h3>{nome}</h3>
                <p>{avaliacao} <img src={estrela} alt="estrela" /></p>
            </S.TextoAvaliacao>
            <S.DescricaoRestaurante>
                <p>{getDescricao(descricao)}</p>
                <Link to={`/perfil/${id}`}>
                    <button>Saiba mais</button>
                </Link>
            </S.DescricaoRestaurante>
        </S.CardRestaurante>
    )
}

export default CardRestaurante
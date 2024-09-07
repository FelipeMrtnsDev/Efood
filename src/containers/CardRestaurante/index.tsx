import * as S from './styles'
import estrela from '../../assets/images/estrela.svg'
import { Link } from 'react-router-dom';

type CardRestauranteProps = {
    imagem: string;
    alt: string;
    titulo: string;
    avaliacao: number;
    descricao: string;
    etiqueta1: string;
    etiqueta2?: string;
}

function CardRestaurante({imagem, alt, titulo, avaliacao, descricao, etiqueta1, etiqueta2}: CardRestauranteProps) {
    return(
        <S.CardRestaurante>
            <S.DivImg>
                <S.Etiquetas>
                    <p>{etiqueta1}</p>
                    {etiqueta2 ? (
                        <p style={{display: 'flex' }}>{etiqueta2}</p>
                    ) : (
                        <p style={{display: 'none'}}></p>
                    )
                }
                </S.Etiquetas>
                <img src={imagem} alt={alt} />
            </S.DivImg>
            <S.TextoAvaliacao>
                <h3>{titulo}</h3>
                <p>{avaliacao} <img src={estrela} alt="estrela" /></p>
            </S.TextoAvaliacao>
            <S.DescricaoRestaurante>
                <p>{descricao}</p>
                <Link to={`/perfil/${titulo}`}>
                    <button>Saiba mais</button>
                </Link>
            </S.DescricaoRestaurante>
        </S.CardRestaurante>
    )
}

export default CardRestaurante
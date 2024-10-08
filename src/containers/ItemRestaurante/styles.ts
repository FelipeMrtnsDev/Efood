import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const Card = styled.div`
    width: 320px;
    height: 338px;
    background-color: ${cores.rosa};
    display: flex;
    flex-direction: column;
`

export const Imagem = styled.div`
    margin: 8px 8px 0px 8px;

    img {
        width: 100%;
        height: 167px;
        object-fit: cover;
    }
`

export const Tituloh2 = styled.div`
    margin: 8px;
    display: flex;
    justify-content: start;

    h2 {
        font-size: 16px;
        font-weight: 900;
        color: ${cores.rosaClaro1};
    }
`

export const Descricao = styled.div`
    margin: 0px 8px 0px 8px;


    p {
        line-height: 21px;
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        margin-bottom: 18px;
    }
`

export const Botao = styled(Link)`
    margin: 8px 8px 8px 8px;
    
    button {
        background-color: ${cores.rosaClaro1};
        width: 100%;
        height: 24px;
        cursor: pointer;
        border: none;
        color: ${cores.rosa};
        font-weight: 700;
    }
`
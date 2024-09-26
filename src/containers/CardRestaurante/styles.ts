import styled from 'styled-components'
import { cores } from '../../styles'

export const CardRestaurante = styled.div`
    width: 472px;
    height: 398px;
    border: 1px solid #e66767;
    position: relative;
    display: flex;
    flex-direction: column;
`

export const DivImg = styled.div`
    width: 100%;
    height: 50%;
    margin-bottom: 8px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
` 

export const TextoAvaliacao = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;
    margin-inline: 8px;

    h3 {
        color: ${cores.rosa};
    }

    p {
        color: ${cores.rosa};
    }
`

export const DescricaoRestaurante = styled.div`
    color: ${cores.rosa};
    margin-left: 8px;

    p {
        color: ${cores.rosa};
        margin-bottom: 16px;
    }

    button {
        background-color: ${cores.rosa};
        padding-inline: 4px;
        padding-block: 6px;
        flex-wrap: wrap;
        align-content: center;
        border: none;
        color: #ffebd9;
        cursor: pointer;
    }
`

export const Etiquetas = styled.p`
    position: absolute;
    top: 16px;
    right: 8px;
    display: flex;
    
    p {
        font-size: 12px;
        background-color: ${cores.rosa};
        border: none;
        color: #ffebd9;
        margin-right: 8px;
        flex-wrap: wrap;
        align-content: center;
        padding-inline: 4px;
        padding-block: 6px;
    }
`
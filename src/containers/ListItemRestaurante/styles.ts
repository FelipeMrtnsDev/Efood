import styled from 'styled-components'
import ItemRestaurante from '../ItemRestaurante';

export const Listagem = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    box-sizing: border-box;
    margin: 0 auto;
    gap: 32px;
    outline: none;
    max-width: 1024px;
`


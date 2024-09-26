import styled from 'styled-components'
import { cores } from '../../styles'

export const Listagem = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    box-sizing: border-box;
    margin: 0 auto;
    gap: 32px;
    outline: none;
    max-width: 1024px;
    object-fit: cover;
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    &.visivel {
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.73);
    }
`

export const ModalContent = styled.div`
    max-width: 1024px;
    max-height: 344px;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    background-color: ${cores.rosa};
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 24px;
        color: #fff;
        cursor: pointer;
    }

    .img-container {
        width: 280px;
        height: 280px;
        padding: 32px;
        display: flex;
        justify-content: center; 
        align-items: center;
    }

    .infos {
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
        width: 70%;
        margin-right: 16px;
        color: #fff;
    }

    h4 {
        font-weight: 900;
        margin-bottom: 16px;
        width: 100%;
    }

    p {
        font-weight: 400;
        margin-bottom: 16px;
        width: 100%;
    }
    
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    } 

    button {
        width: 218px;
        padding: 6px;
        border: none;
        background-color: white;
        color: ${cores.rosa};
        font-weight: 900;
        cursor: pointer;
    }
`


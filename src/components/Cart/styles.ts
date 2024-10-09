import styled from "styled-components";
import { cores } from "../../styles";

export const CartContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    z-index: 3;
    justify-content: flex-end;

    &.is-open {
        display: flex;
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 1;
    z-index: 1;
`;

export const Sidebar = styled.aside`
    background-color: ${cores.rosa};
    z-index: 2;
    padding: 40px 16px 0 16px;
    max-width: 360px;
    width: 100%;
    height: 100%;
    z-index: 4;
`;

export const CartItem = styled.li`
    border-bottom: 1px solid ${cores.rosa};
    position: relative;
    list-style-type: none;

    & .card-item {
        background-color: ${cores.rosaClaro1};
        width: 100%;
        height: 100px;
        margin-right: 8px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        position: relative;
    }

    & .imagem-produto {
        height: 80px;
        width: 80px;
        object-fit: cover;
        margin-right: 8px;
        margin-left: 8px;
    }

    & .lixeira {
        font-size: 16px;
        position: absolute;
        bottom: 8px;
        right: 8px;
        cursor: pointer;
    }

    h3 {
        color: ${cores.rosa};
        font-weight: bold;
        font-size: 18px;
        line-height: 21.9px;
        margin-bottom: 16px;
    }

    p {
        color: ${cores.rosa};
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
    }

    button {
        background-image: url();
        width: 16px;
        height: 16px;
        border: none;
        background-color: transparent;
        position: absolute;
        top: 8px;
        right: 0;
    }
`

export const Valor = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${cores.rosaClaro1};
    margin-top: 24px;
    margin-bottom: 8px;
`

export const ButtonComprar = styled.div`
    width: 100%;
    height: 24px;
    color: ${cores.rosa};
    background-color: ${cores.rosaClaro1};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`
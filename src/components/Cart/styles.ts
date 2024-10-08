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
    display: flex;
`;

export const CartItem = styled.li`
    display: flex;
    border-bottom: 1px solid ${cores.rosa};
    padding: 8px 0;
    position: relative;

    img {
        height: 80px;
        width: 80px;
        object-fit: cover;
        margin-right: 24px;
    }

    h3 {
        color: ${cores.rosa};
        font-weight: bold;
        font-size: 16px;
    }

    span {
        display: block;
        color: ${cores.rosa};
        font-weight: bold;
        font-size: 14px;
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

import styled from "styled-components";
import { cores } from "../../styles";

export const Fundo = styled.div`
    width: 100%;
    height: 298px;
    background-color: ${cores.rosaClaro1};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    margin-top: 120px;

    
    img {
        margin-top: 40px;
        width: 125px;
        height: 57px;
        margin-bottom: 32px;
    }

    p {
        color: ${cores.rosa};
        margin-bottom: 40px;
        text-align: center;
        max-width: 1024px;
    }
`
export const RedesSociais = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 80px;

    svg {
        margin-inline: 4px;
        color: ${cores.rosaClaro};
        background-color: ${cores.rosa};
        border-radius: 50%;
        padding: 4px;
        cursor: pointer;
    }
`

// export const 

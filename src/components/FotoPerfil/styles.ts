import styled from 'styled-components'

export const Imagem = styled.div`
    width: 100%;
    height: 280px;
    position: relative;
    top: 0;
    margin-bottom: 56px;

    img {
        width: 100%;
        height: 100%;
    }

    p {
        position: absolute;
        top: 22px;
        max-width: 1024px;
        left: 170px;
        font-weight: 100;
        font-size: 32px;
        line-height: 32px;
        color: #fff;
    }

    h3 {
        position: absolute;
        bottom: 32px;
        max-width: 1024px;
        font-weight: 900;
        font-size: 32px;
        left: 170px;
        color: #fff;
    }
`
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
        object-fit: cover;
    }

    &::after {
        position: absolute;
        background-color: #000;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
        opacity: 0.56;
    }

    & .container-texto {
        max-width: 1024px;
        margin: 0 auto;
    }

    p {
        position: absolute;
        top: 22px;
        max-width: 1024px;
        font-weight: 100;
        font-size: 32px;
        line-height: 32px;
        color: #fff;
        z-index: 1;
    }

    h3 {
        position: absolute;
        bottom: 32px;
        max-width: 1024px;
        font-weight: 900;
        font-size: 32px;
        color: #fff;
        z-index: 1;
    }
`
import styled from 'styled-components'
import fundoRosa from '../../assets/images/fundoHeader.png'

export const Navbar = styled.nav`
    background-image: url(${fundoRosa});
    width: 100%;
    height: 384px;
    margin-top: 0;
    margin-bottom: 80px;
`

export const Imagem = styled.div`
    margin: 0 auto;
    width: 125px;
    height: 57.5px;
    display: flex;
    justify-content: center;
    padding-top: 40px;
`
export const Titulo = styled.h2`
    font-size: 36px;
    font-weight: 900;
    margin: 0 auto;
    color: #e66767;
    flex-wrap: nowrap;
    margin-top: 138px;
    display: flex;
    justify-content: center;
    text-align: center;
`
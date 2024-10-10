import styled from 'styled-components'
import fundoRosa from '../../assets/images/fundoHeader.png'
import { cores } from '../../styles'

export const Navbar = styled.nav`
    background-image: url(${fundoRosa});
    width: 100%;
    height: 186px;
    margin-top: 0;
`

export const Information = styled.div`
    margin: 0 auto;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    padding-top: 40px;

    h2 {
        color: ${cores.rosa};
    }

    p {
        color: ${cores.rosa};
        font-weight: 700;
    }
`

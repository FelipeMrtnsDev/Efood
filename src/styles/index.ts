import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

type Cores = {
    rosa: string
    rosaClaro: string
    rosaClaro1: string
    branco: string
}

export const cores: Cores = {
    rosa: "#e66767",
    rosaClaro1: "#ffebd9",
    rosaClaro: "#fff8f2",
    branco: "#fff"
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: ${cores.branco};
    }
`

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1024px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`
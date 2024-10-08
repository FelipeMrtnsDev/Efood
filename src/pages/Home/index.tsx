import ListCardRestaurante from "../../containers/ListCardRestaurante";
import Header from "../../components/Header";
import { Container } from "../../styles";
import { useEffect, useState } from "react";

export type Cardapio = {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao?: string
}

export type Product = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    preco: number
    cardapio: Cardapio[]
}

function Home() {
    const [cards, setCards] = useState([])
    
    useEffect(() => {
        fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
        .then((res) => res.json())
        .then((res) => setCards(res))
    })


    return(
        <>
            <Header />
            <Container>
                <ListCardRestaurante restaurantes={cards} />
            </Container>
        </>
    )
}

export default Home
import ListCardRestaurante from "../../containers/ListCardRestaurante";
import Header from "../../components/Header";
import { Container } from "../../styles";
import { useEffect, useState } from "react";


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
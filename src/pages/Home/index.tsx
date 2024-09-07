import ListCardRestaurante from "../../containers/ListCardRestaurante";
import Restaurante from "../../models/Restaurante";
import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'
import Header from "../../components/Header";
import { Container } from "../../styles";

const Cards: Restaurante[] = [
    {
        id: 1,
        imagem: sushi,
        alt: 'sushi-img',
        titulo: 'Hioki Sushi',
        avaliacao: 4.9,
        descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        etiqueta1: 'Destaque da semana',
        etiqueta2: 'Japonesa'
    },
    {
        id: 2,
        imagem: macarrao,
        alt: 'macarrao-img',
        titulo: 'La Dolce Vita Trattoria',
        avaliacao: 4.6,
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        etiqueta1: 'Italiana',
    },
    {
        id: 3,
        imagem: macarrao,
        alt: 'macarrao-img',
        titulo: 'La Dolce Vita Trattoria',
        avaliacao: 4.6,
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        etiqueta1: 'Italiana',
    },
    {
        id: 4,
        imagem: macarrao,
        alt: 'macarrao-img',
        titulo: 'La Dolce Vita Trattoria',
        avaliacao: 4.6,
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        etiqueta1: 'Italiana',
    },
    {
        id: 5,
        imagem: macarrao,
        alt: 'macarrao-img',
        titulo: 'La Dolce Vita Trattoria',
        avaliacao: 4.6,
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        etiqueta1: 'Italiana',
    },
    {
        id: 6,
        imagem: macarrao,
        alt: 'macarrao-img',
        titulo: 'La Dolce Vita Trattoria',
        avaliacao: 4.6,
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        etiqueta1: 'Italiana',
    },
]

function Home() {
    return(
        <>
            <Header />
            <Container>
                <ListCardRestaurante restaurantes={Cards} />
            </Container>
        </>
    )
}

export default Home
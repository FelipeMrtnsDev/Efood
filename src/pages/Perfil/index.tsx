import FotoPerfil from "../../components/FotoPerfil";
import HeaderPerfil from "../../components/HeaderPerfil";
import PerfilRestaurante from "../../models/PerfilRestaurante";
import macarraoPerfil from '../../assets/images/macarraoPerfil.png'
import ItensRestaurante from "../../models/ItensRestaurante";
import pizza from '../../assets/images/pizza.png'
import ListItensRestaurante from "../../containers/ListItemRestaurante";

    export const Restaurantes: PerfilRestaurante[] = [
        {
            titulo: 'La Dolce Vita Trattoria',
            image: macarraoPerfil,
            etiqueta: 'Italiana'
        },
        {
            titulo: 'Hioki Sushi',
            image: macarraoPerfil,
            etiqueta: 'Japonesa'
        }
    ]

    export const itens: ItensRestaurante[] = [
        {
            id: 1,
            imagem: pizza,
            descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            titulo: 'Pizza Marguerita'
        },
        {
            id: 2,
            imagem: pizza,
            descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            titulo: 'Pizza Marguerita'
        },
        {
            id: 3,
            imagem: pizza,
            descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            titulo: 'Pizza Marguerita'
        },
        {
            id: 4,
            imagem: pizza,
            descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            titulo: 'Pizza Marguerita'
        },
        {
            id: 5,
            imagem: pizza,
            descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            titulo: 'Pizza Marguerita'
        },
        {
            id: 6,
            imagem: pizza,
            descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            titulo: 'Pizza Marguerita'
        }
    ]

function Perfil() {
    return(
        <>
            <HeaderPerfil />
            <FotoPerfil />
            <ListItensRestaurante
                itens={itens}
            />
        </>
    )
}

export default Perfil
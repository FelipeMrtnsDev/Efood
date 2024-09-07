import { useParams } from "react-router-dom"
import { Restaurantes } from '../../pages/Perfil'
import { Imagem } from "./styles";

function FotoPerfil() {
    const { titulo } = useParams<{ titulo: string }>();

    const restaurante = Restaurantes.find(r => r.titulo === titulo);

    let imagem: string = '';
    let etiqueta: string = '';
    let tituloRestaurante: string = '';
    let errorMessage: string = '';

    if (restaurante) {
        imagem = restaurante.image;
        etiqueta = restaurante.etiqueta;
        tituloRestaurante = restaurante.titulo;
    } else {
        errorMessage = 'Restaurante não encontrado';
    }


    return(
        <>
            {restaurante ? (
                <Imagem>
                    <p>{etiqueta}</p>
                    <h3>{tituloRestaurante}</h3>
                    <img src={imagem} alt="" />
                </Imagem>
                ) : (
                    <div>{errorMessage}</div>
                )
            }
        </>
    )
}

export default FotoPerfil
import { Imagem } from "./styles";

export type Foto = {
    capa: string
    titulo: string
    id: number
    tipo: string
}

type Props = {
    foto: Foto | undefined
}

function FotoPerfil({ foto }: Props) {

    let errorMessage = 'Restaurante não encontrado';

    return(
        <>
            {foto ? (
                <Imagem>
                    <div className="container-texto">
                        <h3>{foto.titulo}</h3>
                        <p>{foto.tipo}</p>
                    </div>
                    <img src={foto.capa} alt="" />
                </Imagem>
                ) : (
                    <div>{errorMessage}</div>
                )
            }
        </>
    )
}

export default FotoPerfil
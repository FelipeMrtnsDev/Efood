import FotoPerfil, { Foto } from "../../components/FotoPerfil";
import HeaderPerfil from "../../components/HeaderPerfil";
import ListItensRestaurante, { ItensRestaurante } from "../../containers/ListItemRestaurante";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Perfil() {
    const [foto, setFoto] = useState<Foto[]>([]);
    const [itens, setItens] = useState<ItensRestaurante[]>([]);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
            .then((res) => res.json())
            .then((res) => setFoto(res));

        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setItens([res]);
            });
    }, [id]);

    const fotoFiltrada = id ? foto.find((foto) => foto.id === parseInt(id)) : undefined;

    const itemFiltrado = id ? itens[0] : undefined;

    const primeiroCardapio = itemFiltrado?.cardapio[0];

    return (
        <>
            <HeaderPerfil />
            <FotoPerfil foto={fotoFiltrada} />
            <ListItensRestaurante
                porcao={primeiroCardapio?.porcao || ''}
                itens={itemFiltrado ? [itemFiltrado] : []} 
                name={primeiroCardapio?.nome || ''}
                descricao={primeiroCardapio?.descricao || ''} 
                preco={primeiroCardapio ? primeiroCardapio.preco : 0} 
            />
        </>
    );
}

export default Perfil;

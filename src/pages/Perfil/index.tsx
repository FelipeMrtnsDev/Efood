import Cart from "../../components/Cart";
import FotoPerfil, { Foto } from "../../components/FotoPerfil";
import HeaderPerfil from "../../components/HeaderPerfil";
import ListItensRestaurante from "../../containers/ListItemRestaurante";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../Home";

function Perfil() {
    const [foto, setFoto] = useState<Foto[]>([]);
    const [itens, setItens] = useState<Product | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
            .then((res) => res.json())
            .then((res) => setFoto(res));

        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setItens(res); 
            });
    }, [id]);

    const fotoFiltrada = id ? foto.find((foto) => foto.id === parseInt(id)) : undefined;

    return (
        <>
            <Cart />
            <HeaderPerfil />
            <FotoPerfil foto={fotoFiltrada} />
            {itens && (
                <ListItensRestaurante
                    itens={itens} 
                />
            )}
        </>
    );
}

export default Perfil;

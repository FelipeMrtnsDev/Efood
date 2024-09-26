import ItemRestaurante from "../ItemRestaurante";
import { Listagem, Modal, ModalContent } from "./styles";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export type CardapioItem = {
    id: number;
    nome: string;
    descricao: string;
    foto: string;
    porcao: string;
    preco: number
};

export type ItensRestaurante = {
    id: number;
    titulo: string;
    imagem: string;
    descricao: string;
    alt?: string;
    cardapio: CardapioItem[];
};

type Props = {
    name: string
    descricao: string
    preco: number
    porcao: string
    itens: ItensRestaurante[];
};

type ModalState = {
    isVisible: boolean;
    url: string;
};

function ListItensRestaurante({ itens, name, descricao, preco, porcao }: Props) {
    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        url: ''
    });

    const getDescricao = (descricao: string) => {
        if (descricao.length > 134) {
            return descricao.slice(0, 134) + '...';
        }
        return descricao;
    };

    const closeModal = () => {
        setModal({
            isVisible: false,
            url: ''
        })
    }

    const getIdHandleClick = (item: CardapioItem) => {
        setModal({
            isVisible: true,
            url: item.foto
        });
    };

    return (
        <>
            <Listagem>
                {itens.map((itemRestaurante) => (
                    itemRestaurante.cardapio.map((item) => (
                        <ItemRestaurante
                            onClick={() => getIdHandleClick(item)}
                            alt={item.nome}
                            descricao={getDescricao(item.descricao)}
                            id={item.id}
                            imagem={item.foto}
                            titulo={item.nome}
                            key={item.id}
                        />
                    ))
                ))}
            </Listagem>
            <Modal className={modal.isVisible ? 'visivel' : ''}>
                <ModalContent>
                    <IoClose onClick={() => closeModal()}/>
                    <div className="img-container">
                        <img src={modal.url} alt={modal.url} />
                    </div>
                    <div className="infos">
                        <h4>{name}</h4>
                        <p>{descricao}</p>
                        <p>{porcao}</p>
                        <button>Adicionar ao carrinho - R$ {preco}</button>
                    </div>
                </ModalContent>
                <div className="overlay" onClick={() => closeModal()}>
                </div>
            </Modal>
        </>
    );
}

export default ListItensRestaurante;

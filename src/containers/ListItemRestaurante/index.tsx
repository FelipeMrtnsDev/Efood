import { useDispatch } from "react-redux";
import ItemRestaurante from "../ItemRestaurante";
import { Listagem, Modal, ModalContent } from "./styles";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { add, open } from "../../store/reducer/cartReducer";
import { Cardapio, Product } from "../../pages/Home";

type Props = {
    itens: Product;
};

type ModalState = {
    isVisible: boolean;
    url: string;
};

function ListItensRestaurante({ itens }: Props) {
    const dispatch = useDispatch();

    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        url: ''
    });
    const [itemClicado, setItemClicado] = useState(0)

    const getDescricao = (descricao: string) => {
        return descricao.length > 134 ? descricao.slice(0, 134) + '...' : descricao;
    };

    const closeModal = () => {
        setModal({
            isVisible: false,
            url: ''
        });
    };

const handleAddToCart = (cardapioItem: Cardapio) => {
    dispatch(add(cardapioItem));
    dispatch(open())
    setModal({
        isVisible: false,
        url: ''
    })
};


    const getIdHandleClick = (item: Cardapio) => {
        setModal({
            isVisible: true,
            url: item.foto
        });
        setItemClicado(item.id)
    };

    return (
        <>
            <Listagem>
                {itens.cardapio.map((item) => {
                    return(
                        <ItemRestaurante
                            onClick={() => getIdHandleClick(item)}
                            alt={item.nome}
                            descricao={getDescricao(item.descricao)}
                            id={item.id}
                            imagem={item.foto}
                            titulo={item.nome}
                            key={item.id}
                        />
                    )
                })}
            </Listagem>
            <Modal className={modal.isVisible ? 'visivel' : ''}>
                <ModalContent>
                    <IoClose onClick={closeModal} />
                    <div className="img-container">
                        <img src={modal.url} alt={modal.url} />
                    </div>
                    {itens.cardapio.map((cardapioItem: Cardapio) => cardapioItem.id === itemClicado ? (
                        <div className="infos" key={cardapioItem.id}>
                            <h4>{cardapioItem.nome}</h4>
                            <p>{cardapioItem.descricao}</p>
                            <p>{cardapioItem.porcao}</p>
                            <button onClick={() => handleAddToCart(cardapioItem)}>
                                Adicionar ao carrinho - R$ {cardapioItem.preco}
                            </button>
                        </div>
                    ) : null
                    )}
                </ModalContent>
                <div className="overlay" onClick={closeModal}></div>
            </Modal>
        </>
    );
}

export default ListItensRestaurante;

import { useDispatch, useSelector } from "react-redux";
import { ButtonComprar, CartContainer, CartItem, Overlay, Sidebar, Valor } from "./styles";
import { RootReducer } from "../../store";
import { close, remover } from "../../store/reducer/cartReducer";
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.svg'
import { Cardapio } from "../../pages/Home";
import { formataPreco } from "../../containers/ListItemRestaurante";

function Cart() {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch();

    const closeCart = () => {
        dispatch(close());
    }

    const removerItem = (items: Cardapio) => {
        dispatch(remover(items))
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
        return (acumulador += valorAtual.preco!)
        }, 0)
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                <ul>
                    {items.map((item) => (
                        <CartItem>
                            <div className="card-item">
                                <img className="imagem-produto" src={item.foto} alt={item.nome} />
                                <div className="infos">
                                    <h3>{item.nome}</h3>
                                    <p>R$ {formataPreco(item.preco)}</p>
                                </div>
                                <img
                                onClick={() => removerItem(item)}
                                className="lixeira" src={lixeira} alt="lixeira" />
                            </div>
                        </CartItem>
                    ))}
                </ul>
                {items.length > 0 ? (
                    <>
                        <Valor>
                            <p className="valor-total">Valor Total</p>
                            <p className="preco">R$ {formataPreco(getTotalPrice())}</p>
                        </Valor>
                        <ButtonComprar>Continuar com a entrega</ButtonComprar>
                    </>
                ) : (
                    <div>Carrinho Vazio...</div>
                )
                }
            </Sidebar>
        </CartContainer>
    );
}



export default Cart;

import { useDispatch, useSelector } from "react-redux";
import { CartContainer, CartItem, Overlay, Sidebar } from "./styles";
import { RootReducer } from "../../store";
import { close } from "../../store/reducer/cartReducer";
import { Cardapio } from "../../pages/Home"; // Assegure-se de que Cardapio seja importado corretamente

function Cart() {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch();

    const closeCart = () => {
        dispatch(close());
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                <ul>
                    {items.map((item) => (
                        <CartItem>
                            <img src={item.foto} alt="" />
                            <h3>{item.nome}</h3>
                            <p>{item.descricao}</p>
                        </CartItem>
                    ))}
                </ul>
            </Sidebar>
        </CartContainer>
    );
}



export default Cart;

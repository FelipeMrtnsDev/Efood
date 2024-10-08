import { useDispatch, useSelector } from "react-redux"
import { CartContainer, CartItem, Overlay, Sidebar } from "./styles"
import { RootReducer } from "../../store"
import { close } from "../../store/reducer/cartReducer"
import { Cardapio, Product } from "../../pages/Home"

function Cart() {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    // const getTotalPrice = (): number => {
    //     return items.reduce((acumulador: number , produto: Product) => {
    //         // Itera sobre o array cardapio de cada produto
    //         const precoTotal = produto.cardapio.reduce((subAcumulador: number, cardapioItem: Cardapio) => {
    //             return subAcumulador + (cardapioItem.preco || 0); // Soma os preços dos itens do cardápio
    //         }, 0);
    //         return acumulador + precoTotal; // Adiciona o total do cardápio ao acumulador
    //     }, 0);
    // };
    
    

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart}/>
                <Sidebar>
                    <ul>
                    {items.map((item) => {
                        return (
                            console.log('oque esta retornando?', item),
                            <CartItem key={item.id}>
                                {item.cardapio.map((CardapioItem) => {
                                    return (
                                        <>
                                            <img key={CardapioItem.id} src={CardapioItem.foto} alt={CardapioItem.nome} />
                                            <h3>{CardapioItem.nome}</h3>
                                        </>
                                    )
                                })}
                            </CartItem>
                        )
                    })}
                    </ul>
                </Sidebar>
        </CartContainer>
    )
}

export default Cart
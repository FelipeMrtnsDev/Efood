import { Navbar, Information } from "./styles"
import efoodLogo from '../../assets/images/logo.svg'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { open } from "../../store/reducer/cartReducer"

function HeaderPerfil() {

    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)

    const openCart = () => {
        dispatch(open())
    }

    return (
        <Navbar>
            <Information>
                <h2>Restaurantes</h2>
                <Link to='/'>
                    <img src={efoodLogo} alt="logo" />
                </Link>
                <p onClick={openCart}>{items.length} produto(s) no carrinho</p>
            </Information>
        </Navbar>
    )
}

export default HeaderPerfil